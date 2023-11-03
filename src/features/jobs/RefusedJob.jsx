import { useQuery } from '@tanstack/react-query'
import Table from '../../ui/Table'
import Spinner from '../../ui/Spinner'
import { getEmployerCurrentJob } from '../../services/apiJob'
import EmployerRefusedJobRow from '../../ui/EmployerRefusedJobRow'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function RefusedJob() {
    const { user } = useContext(UserContext)
    const {
        isLoading,
        data: refusedJobs,
        // error,
    } = useQuery({
        queryKey: ['refused-jobs'],
        queryFn: () => getEmployerCurrentJob({ id: user.id, status: 2 }),
    })

    if (isLoading) return <Spinner />

    if (refusedJobs.length === 0)
        return (
            <DescriptionSection>
                Bạn hiện không có công việc nào bị từ chối
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
                {refusedJobs.map((job) => (
                    <EmployerRefusedJobRow key={job.id} job={job} />
                ))}
            </Table.Body>
        </Table>
    )
}

export default RefusedJob
