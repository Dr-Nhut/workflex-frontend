import { Link } from 'react-router-dom'
import formatCurrency from '../utils/formatCurrency'
import formatTime from '../utils/formatTime'
import Table from './Table'

function EmployerRefusedJobRow({ job }) {
    const { category, name, createAt, maxBudget } = job
    return (
        <Table.Row>
            <td className="col-span-2">{category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{name}</td>
            <td className="col-span-2">{formatTime(createAt)}</td>
            <td className="col-span-1">{formatCurrency(maxBudget)}</td>
            <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                <Link to={`${job.id}`}>Xem chi tiết</Link>
            </td>
        </Table.Row>
    )
}

export default EmployerRefusedJobRow
