import Table from '../../ui/Table'
import { useQuery } from '@tanstack/react-query'
import { getFreelancerCurrentJob } from '../../services/apiJob'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import FreelancerPaidJobRow from '../../ui/FreelancerPaidJobRow'

function FreelancerPaidJob() {
    const { user } = useContext(UserContext)
    const {
        data: paidJobs,
        // error,
    } = useQuery({
        queryKey: ['freelancer-paid-job'],
        queryFn: () =>
            getFreelancerCurrentJob({
                id: user.id,
                status: 8,
            }),
    })

    const {
        data: finishedJobs,
        // error,
    } = useQuery({
        queryKey: ['freelancer-finished-job'],
        queryFn: () =>
            getFreelancerCurrentJob({
                id: user.id,
                status: 9,
            }),
    })

    const {
        data: noReceivedJobs,
        // error,
    } = useQuery({
        queryKey: ['freelancer-noReceived-job'],
        queryFn: () =>
            getFreelancerCurrentJob({
                id: user.id,
                status: 10,
            }),
    })

    return (
        <>
            {paidJobs?.length > 0 ||
            finishedJobs?.length > 0 ||
            noReceivedJobs?.length > 0 ? (
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
                        {paidJobs?.map((job) => (
                            <FreelancerPaidJobRow key={job.id} job={job} />
                        ))}

                        {finishedJobs?.map((job) => (
                            <FreelancerPaidJobRow key={job.id} job={job} />
                        ))}

                        {noReceivedJobs?.map((job) => (
                            <FreelancerPaidJobRow key={job.id} job={job} />
                        ))}
                    </Table.Body>
                </Table>
            ) : (
                <DescriptionSection>
                    Bạn chưa hoàn thành công việc nào
                </DescriptionSection>
            )}
        </>
    )
}

export default FreelancerPaidJob
