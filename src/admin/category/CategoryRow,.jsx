import Table from '../../ui/Table'
import { UilEdit, UilTimesSquare } from '@iconscout/react-unicons'

function CategoryRow({ category }) {
    return (
        <Table.Row>
            <td className="col-span-4">{category.id}</td>
            <td className="col-span-6 text-left">{category.name}</td>
            <td className="col-span-2 flex items-center justify-center gap-x-8">
                <UilEdit />
                <UilTimesSquare />
            </td>
        </Table.Row>
    )
}

export default CategoryRow
