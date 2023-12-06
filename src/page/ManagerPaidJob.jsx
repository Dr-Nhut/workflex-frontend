import { useQuery } from '@tanstack/react-query'
import Table from '../ui/Table'
import { getJobByStatus } from '../services/apiJob'
import Spinner from '../ui/Spinner'
import PaidJobRow from '../ui/PaidJobRow'
import PageHeader from '../ui/PageHeader'
import DescriptionSection from '../ui/Section/DescriptionSection'

function ManagerPaidJob() {
    const { isLoading, data: paidJobs } = useQuery({
        queryKey: ['paid-jobs'],
        queryFn: () => getJobByStatus(7),
    })

    if (isLoading) return <Spinner />
    return (
        <div className="min-h-[600px]">
            <PageHeader title="Quản lý thanh toán" />
            {paidJobs.length === 0 ? (
                <DescriptionSection>
                    Không có công việc nào đang chờ thanh toán
                </DescriptionSection>
            ) : (
                <Table columns="grid-cols-12">
                    <Table.Header>
                        <th className="col-span-2">Lĩnh vực</th>
                        <th className="col-span-4">Tên công việc</th>
                        <th className="col-span-2">Nhà tuyển dụng</th>
                        <th className="col-span-2">Freelancer</th>
                        <th className="col-span-1">Chi phí</th>
                        <th className="col-span-1"></th>
                    </Table.Header>

                    <Table.Body>
                        {paidJobs.map((job) => (
                            <PaidJobRow key={job.id} job={job} />
                        ))}
                    </Table.Body>
                </Table>
            )}
        </div>
    )
}

export default ManagerPaidJob
