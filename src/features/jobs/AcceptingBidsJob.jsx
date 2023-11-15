import { useQuery } from '@tanstack/react-query'
import Table from '../../ui/Table'
import { getBiddingAndLockingJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import EmployerBiddingJobRow from '../../ui/EmployerBiddingJobRow'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function AcceptingBidsJob() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const {
        isLoading,
        data: biddingJobs,
        // error,
    } = useQuery({
        queryKey: ['acceptingBidsJob', user.id],
        queryFn: () => getBiddingAndLockingJob(user.id),
    })

    if (isLoading) return <Spinner />

    return (
        <>
            {biddingJobs.length === 0 ? (
                <DescriptionSection>
                    Bạn không có công việc nào đang chào giá
                </DescriptionSection>
            ) : (
                <Table columns="grid-cols-12">
                    <Table.Header>
                        <th className="col-span-2">Lĩnh vực</th>
                        <th className="col-span-4">Tên công việc</th>
                        <th className="col-span-2">Hạn chào giá</th>
                        <th className="col-span-2">Thời gian dự án</th>
                        <th className="col-span-1">Ngân sách</th>
                        <th className="col-span-1"></th>
                    </Table.Header>

                    <Table.Body>
                        {biddingJobs.map((job) => (
                            <EmployerBiddingJobRow
                                key={job.id}
                                job={job}
                                onClick={() =>
                                    navigate(`/employer-job/${job.id}/offers`)
                                }
                            />
                        ))}
                    </Table.Body>
                </Table>
            )}
        </>
    )
}

export default AcceptingBidsJob
