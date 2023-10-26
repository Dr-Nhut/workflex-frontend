import { useParams } from 'react-router-dom'
import JobDetail from '../features/jobs/JobDetail'
import JobInforSidebar from '../features/jobs/JobInforSidebar'
import SidebarLayout from '../layouts/SidebarLayout'
import HeaderDetailPage from '../ui/HeaderDetailPage'
import { useQuery } from '@tanstack/react-query'
import { getDetailJob } from '../services/apiJob'
import Spinner from '../ui/Spinner'
import OfferContainer from '../ui/OfferContainer'

function EmployerOffers() {
    const id = useParams().id
    const {
        isLoading,
        data: jobDetail,
        // error,
    } = useQuery({
        queryKey: ['jobDetail', id],
        queryFn: () => getDetailJob(id),
    })

    if (isLoading) return <Spinner />
    return (
        <div>
            <HeaderDetailPage>Chi tiết công việc</HeaderDetailPage>
            <SidebarLayout
                fullWidth
                sidebar={<JobInforSidebar job={jobDetail} />}
                right
                mainWidth="col-span-8"
            >
                <JobDetail jobDetail={jobDetail} simple />
            </SidebarLayout>

            <OfferContainer />
        </div>
    )
}

export default EmployerOffers
