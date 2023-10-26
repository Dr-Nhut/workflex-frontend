import { useNavigate } from 'react-router-dom'
import Rectangle from './Rectangle'
import Table from './Table'

function EmployerCurrentJobRow({ job }) {
    const navigate = useNavigate()

    return (
        <Table.Row onClick={() => navigate(`/contract?job=${job.id}`)}>
            <td className="col-span-2">{job.category}</td>
            <td className="col-span-6 line-clamp-1 text-left">{job.name}</td>
            <td className="col-span-2">{job.duration} ngày</td>
            <td className="col-span-1">
                <Rectangle background="bg-green-500">7/15</Rectangle>
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
