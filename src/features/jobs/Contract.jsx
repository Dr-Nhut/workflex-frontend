import { useSearchParams } from 'react-router-dom'
import SidebarLayout from '../../layouts/SidebarLayout'
import ContractInfor from './ContractInfor'
import ContractSidebar from './ContractSidebar'
import { useQueries } from '@tanstack/react-query'
import { getDetailJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import { getOfferProcessing } from '../../services/apiOffer'
import HeaderDetailPage from '../../ui/HeaderDetailPage'
import { useContext, useEffect } from 'react'
import { UserContext } from '../user/userSlice'

function Contract() {
    const { user } = useContext(UserContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const jobId = searchParams.get('job')

    const [
        { isLoading: loadingJobDetail, data: job },
        { isLoading: loadingOfferProcessing, data: offer },
    ] = useQueries({
        queries: [
            {
                queryKey: ['jobDetail'],
                queryFn: () => getDetailJob(jobId),
            },
            {
                queryKey: ['offerDetail'],
                queryFn: () => getOfferProcessing(jobId),
            },
        ],
    })

    useEffect(() => {
        setSearchParams({
            job: jobId,
            partner:
                user.role === 'emp' ? offer?.freelancerId : job?.employerId,
        })
    }, [user?.role, offer?.freelancerId, job?.employerId])

    if (loadingJobDetail || loadingOfferProcessing) return <Spinner />
    return (
        <div className="m-8">
            <HeaderDetailPage nav="/freelancer-jobs/current">
                Chi tiết hợp tác
            </HeaderDetailPage>
            <SidebarLayout
                mainWidth="col-span-9"
                fullWidth
                right
                sidebar={<ContractSidebar job={job} offer={offer} />}
            >
                <ContractInfor job={job} offer={offer} />
            </SidebarLayout>
        </div>
    )
}

export default Contract
