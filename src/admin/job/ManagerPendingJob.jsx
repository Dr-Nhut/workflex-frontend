import { useQuery } from '@tanstack/react-query'
import Table from '../../ui/Table'
import { getJobByStatus, getPendingJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import PendingJobRow from './PendingJobRow'
import DescriptionSection from '../../ui/Section/DescriptionSection'
// import { UilTimesCircle } from '@iconscout/react-unicons'

function ManagerPendingJob() {
    const {
        isLoading,
        data: pendingJob,
        error,
    } = useQuery({
        queryKey: ['job'],
        queryFn: () => getJobByStatus(1),
    })

    if (isLoading) return <Spinner />
    if (pendingJob.length === 0)
        return (
            <DescriptionSection>
                Không có công việc nào đang chờ duyệt
            </DescriptionSection>
        )
    return (
        <Table columns="grid-cols-12">
            <Table.Header>
                <th className="col-span-2">Lĩnh vực</th>
                <th className="col-span-4">Tên công việc</th>
                <th className="col-span-2">Nhà tuyển dụng</th>
                <th className="col-span-2">Hạn báo giá</th>
                <th className="col-span-1">Ngân sách</th>
                <th className="col-span-1"></th>
            </Table.Header>

            <Table.Body>
                {pendingJob.map((job) => (
                    <PendingJobRow key={job.id} job={job} />
                ))}
            </Table.Body>
        </Table>
    )
}

export default ManagerPendingJob
