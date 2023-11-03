import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getDetailJob } from '../services/apiJob'
import Spinner from '../ui/Spinner'
import JobDetail from '../features/jobs/JobDetail'
import SidebarLayout from '../layouts/SidebarLayout'
import JobApprove from '../admin/job/JobApproval'
import HeaderDetailPage from '../ui/HeaderDetailPage'

function ManagerJobDetail() {
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
        <>
            <HeaderDetailPage>
                Chi tiết công việc đang chờ duyệt
            </HeaderDetailPage>
            <SidebarLayout
                fullWidth
                right
                sidebar={<JobApprove jobDetail={jobDetail} />}
            >
                <JobDetail jobDetail={jobDetail} />
            </SidebarLayout>
        </>
    )
}

export default ManagerJobDetail
