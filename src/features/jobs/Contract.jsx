import { useSearchParams } from 'react-router-dom'
import SidebarLayout from '../../layouts/SidebarLayout'
import ContractInfor from './ContractInfor'
import ContractSidebar from './ContractSidebar'
import { useQueries } from '@tanstack/react-query'
import { getDetailJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import { getOfferProcessing } from '../../services/apiOffer'
import HeaderDetailPage from '../../ui/HeaderDetailPage'

function Contract() {
    const [searchParams] = useSearchParams()
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

    if (loadingJobDetail || loadingOfferProcessing) return <Spinner />
    return (
        <div className="m-8">
            <HeaderDetailPage>Chi tiết hợp tác</HeaderDetailPage>
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
