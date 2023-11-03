import Table from '../../ui/Table'
import { useQuery } from '@tanstack/react-query'
import { getFreelancerCurrentJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import CompleteJobRow from '../../ui/CompleteJobRow'

function FreelancerCompleteJob() {
    const { user } = useContext(UserContext)
    const {
        isLoading,
        data: jobs,
        // error,
    } = useQuery({
        queryKey: ['freelancer-complete-job'],
        queryFn: () =>
            getFreelancerCurrentJob({
                id: user.id,
                status: 6,
            }),
    })

    if (isLoading) return <Spinner />

    return (
        <>
            {jobs?.length > 0 ? (
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
                        {jobs.map((job) => (
                            <CompleteJobRow
                                key={job.id}
                                job={job}
                                role={user.role}
                            />
                        ))}
                    </Table.Body>
                </Table>
            ) : (
                <DescriptionSection>
                    Không có công việc nào đang thực hiện
                </DescriptionSection>
            )}
        </>
    )
}

export default FreelancerCompleteJob
