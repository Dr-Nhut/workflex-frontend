import { useQuery } from '@tanstack/react-query'
import Table from '../../ui/Table'
import { getPendingJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import EmployerPendingJobRow from '../../ui/EmployerPendingJobRow'

function PendingJob() {
    const {
        isLoading,
        data: pendingJobs,
        error,
    } = useQuery({
        queryKey: ['jobs'],
        queryFn: getPendingJob,
    })

    if (isLoading) return <Spinner />

    if (pendingJobs.length === 0)
        return (
            <DescriptionSection>
                Bạn hiện không có công việc nào đang chờ duyệt
            </DescriptionSection>
        )

    return (
        <Table columns="grid-cols-10">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-4">Tên công việc</th>
                <th className="col-span-2">Ngày đăng</th>
                <th className="col-span-1">Ngân sách</th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                {pendingJobs.map((job) => (
                    <EmployerPendingJobRow key={job.id} job={job} />
                ))}
            </Table.Body>
        </Table>
    )
}

export default PendingJob
