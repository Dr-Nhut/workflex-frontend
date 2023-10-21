import { useQuery } from '@tanstack/react-query'
import Button from '../common/buttons/Button'
import JobDetail from '../features/jobs/JobDetail'
import SidebarLayout from '../layouts/SidebarLayout'
import TitleSection from '../ui/TitleSection'
import { UilArrowRight } from '@iconscout/react-unicons'
import { getDetailJob } from '../services/apiJob'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../ui/Spinner'
import JobRefusedInfor from '../features/jobs/JobRefusedInfor'

function EmpRefusedJob() {
    const navigate = useNavigate()
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
            <div className="ml-8 mr-2 mt-2 flex items-center justify-between">
                <TitleSection>Công việc của bạn</TitleSection>
                <Button
                    onClick={() => navigate(-1)}
                    icon={<UilArrowRight />}
                    type="btn-text"
                >
                    Quay lại
                </Button>
            </div>
            <SidebarLayout
                fullWidth
                right
                sidebar={<JobRefusedInfor jobDetail={jobDetail} />}
            >
                <JobDetail jobDetail={jobDetail} />
            </SidebarLayout>
        </>
    )
}

export default EmpRefusedJob
