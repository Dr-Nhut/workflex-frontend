import { useMutation, useQueryClient } from '@tanstack/react-query'
import Table from '../../ui/Table'
import { UilTimesSquare } from '@iconscout/react-unicons'
import { deleteCategory } from '../../services/apiCategory'
import toast from 'react-hot-toast'

function CategoryRow({ category }) {
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteCategory,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-categories'] })
            toast.success('Đã xóa lĩnh vực')
        },
    })

    return (
        <Table.Row>
            <td className="col-span-4">{category.id}</td>
            <td className="col-span-6 text-left">{category.name}</td>
            <td className="col-span-2">
                <UilTimesSquare onClick={() => mutate(category.id)} />
            </td>
        </Table.Row>
    )
}

export default CategoryRow
