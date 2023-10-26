import Table from '../../ui/Table'
import { useQuery } from '@tanstack/react-query'
import {
    getEmployerCurrentJob,
    getFreelancerCurrentJob,
} from '../../services/apiJob'
import EmployerCurrentJobRow from '../../ui/EmployerCurrentJobRow'
import Spinner from '../../ui/Spinner'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function CurrentJob() {
    const { user } = useContext(UserContext)
    const {
        isLoading,
        data: jobs,
        // error,
    } = useQuery({
        queryKey:
            user.role === 'emp'
                ? ['employer-current-job']
                : ['freelancer-current-job'],
        queryFn: () => {
            if (user.role === 'emp')
                return getEmployerCurrentJob({
                    id: user.id,
                    status: 'Đang thực hiện',
                })
            else if (user.role === 'fre')
                return getFreelancerCurrentJob({
                    id: user.id,
                    status: 'Đang thực hiện',
                })
        },
    })

    if (isLoading) return <Spinner />

    return (
        <>
            {jobs.length > 0 ? (
                <Table columns="grid-cols-12">
                    <Table.Header>
                        <th className="col-span-2">Lĩnh vực</th>
                        <th className="col-span-6">Tên công việc</th>
                        <th className="col-span-2">Thời hạn</th>
                        <th className="col-span-1">Tiến độ</th>
                        <th className="col-span-1"></th>
                    </Table.Header>

                    <Table.Body>
                        {jobs.map((job) => (
                            <EmployerCurrentJobRow key={job.id} job={job} />
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

export default CurrentJob
