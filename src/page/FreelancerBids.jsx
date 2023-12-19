import { useContext } from 'react'
import JobDetail from '../features/jobs/JobDetail'
import JobInforSidebar from '../features/jobs/JobInforSidebar'
import SendBid from '../features/jobs/SendBid'
import SidebarLayout from '../layouts/SidebarLayout'
import { getDetailJob } from '../services/apiJob'
import HeaderDetailPage from '../ui/HeaderDetailPage'
import Spinner from '../ui/Spinner'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { UserContext } from '../features/user/userSlice'

function FreelancerBids() {
    const {user} = useContext(UserContext)
    const id = useParams().id
    const {
        isLoading,
        data: jobDetail,
        error,
    } = useQuery({
        queryKey: ['jobDetail', id],
        queryFn: () => getDetailJob(id),
    })

    if (isLoading) return <Spinner />

    if(user.role !== 'fre') return null;

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
            <SendBid jobDetail={jobDetail} />
        </div>
    )
}

export default FreelancerBids
