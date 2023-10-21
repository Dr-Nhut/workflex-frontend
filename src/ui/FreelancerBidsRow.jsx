import Button from '../common/buttons/Button'
import Rectangle from './Rectangle'
import Table from './Table'
import { UilEdit, UilTimesSquare } from '@iconscout/react-unicons'
import formatCurrency from '../utils/formatCurrency'

function FreelancerBidsRow({ offer }) {
    const { categoryName, jobName, price, maxBudget, status } = offer
    return (
        <Table.Row>
            <td className="col-span-2">{categoryName}</td>
            <td className="col-span-5 line-clamp-1 text-left">{jobName}</td>
            <td className="col-span-1">{formatCurrency(price)}</td>
            <td className="col-span-1">{formatCurrency(maxBudget)}</td>
            <td className="col-span-2">
                <Rectangle background="bg-teal-500">{status}</Rectangle>
            </td>
            <td className="col-span-1 flex text-stone-500">
                <Button type="btn-text" className="rounded" size="small">
                    <UilEdit />
                </Button>
                <Button type="btn-text" className="rounded" size="small">
                    <UilTimesSquare />
                </Button>
            </td>
        </Table.Row>
    )
}

export default FreelancerBidsRow
