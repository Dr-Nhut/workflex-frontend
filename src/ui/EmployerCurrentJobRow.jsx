import { useNavigate } from 'react-router-dom'
import Rectangle from './Rectangle'
import Table from './Table'
import { useQuery } from '@tanstack/react-query'
import { getOfferProcessing } from '../services/apiOffer'
import { getContractByOffer } from '../services/apiContact'
import { getContractTasks } from '../services/apiTask'

function EmployerCurrentJobRow({ job }) {
    const navigate = useNavigate()

    const { data: offer } = useQuery({
        queryKey: ['offerDetail'],
        queryFn: () => getOfferProcessing(job.id),
    })

    const { data: contract } = useQuery({
        queryKey: ['contract'],
        queryFn: () => getContractByOffer(offer.id),
        enabled: !!offer?.id,
    })

    const { isSuccess, data: tasks } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => getContractTasks(contract.id),
        enabled: !!contract?.id,
    })

    let numberOfCompletedTasks = 0

    if (tasks) {
        tasks.forEach((task) => {
            if (task.status === 1) {
                numberOfCompletedTasks += 1
            }
        })
    }

    return (
        <Table.Row onClick={() => navigate(`/contract?job=${job.id}`)}>
            <td className="col-span-2">{job.category}</td>
            <td className="col-span-6 line-clamp-1 text-left">{job.name}</td>
            <td className="col-span-2">{job.duration} ngày</td>
            <td className="col-span-1">
                {isSuccess && (
                    <Rectangle background="bg-green-500">{`${numberOfCompletedTasks}/${tasks?.length}`}</Rectangle>
                )}
            </td>
            <td className="col-span-1">
                <span className="rounded-xl bg-red-600 px-2 text-stone-50">
                    2
                </span>
            </td>
        </Table.Row>
    )
}

export default EmployerCurrentJobRow
