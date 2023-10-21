import JobDetail from '../features/jobs/JobDetail'
import JobInforSidebar from '../features/jobs/JobInforSidebar'
import SendBid from '../features/jobs/SendBid'
import SidebarLayout from '../layouts/SidebarLayout'
import { getDetailJob } from '../services/apiJob'
import HeaderDetailPage from '../ui/HeaderDetailPage'
import Spinner from '../ui/Spinner'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

function FreelancerBids() {
    const id = useParams().id
    const {
        isLoading,
        data: jobDetail,
        error,
    } = useQuery({
        queryKey: ['jobDetail'],
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
            <SendBid />
        </div>
    )
}

export default FreelancerBids
