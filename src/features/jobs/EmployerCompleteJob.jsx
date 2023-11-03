import Table from '../../ui/Table'
import { useQuery } from '@tanstack/react-query'
import { getEmployerCurrentJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import CompleteJobRow from '../../ui/CompleteJobRow'

function EmployerCompleteJob() {
    const { user } = useContext(UserContext)
    const {
        isLoading: loadingCompletedJobs,
        data: completedJobs,
        // error,
    } = useQuery({
        queryKey: ['employer-complete-job'],
        queryFn: () =>
            getEmployerCurrentJob({
                id: user.id,
                status: 6,
                comparison: '>='
            }),
    })

    if (loadingCompletedJobs) return <Spinner />

    return (
        <>
            {completedJobs?.length > 0 ? (
                <Table columns="grid-cols-12">
                    <Table.Header>
                        <th className="col-span-2">Lĩnh vực</th>
                        <th className="col-span-4">Tên công việc</th>
                        <th className="col-span-2">Ngày hoàn thành</th>
                        <th className="col-span-1">Thời hạn</th>
                        <th className="col-span-1">Chi phí</th>
                        <th className="col-span-2">Trạng thái</th>
                    </Table.Header>

                    <Table.Body>
                        {completedJobs.map((job) => (
                            <CompleteJobRow key={job.id} job={job} />
                        ))}
                    </Table.Body>
                </Table>
            ) : (
                <DescriptionSection>
                    Hiện chưa có công việc đã hoàn thành
                </DescriptionSection>
            )}
        </>
    )
}

export default EmployerCompleteJob
