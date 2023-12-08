import { useMutation, useQueryClient } from '@tanstack/react-query'
import Table from '../../ui/Table'
import { UilTimesSquare } from '@iconscout/react-unicons'
import toast from 'react-hot-toast'
import { deleteSkill } from '../../services/apiSkill'

function SkillRow({ skill }) {
    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: deleteSkill,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['all-skills'] })
            toast.success('Đã xóa ngôn ngữ lập trình')
        },
    })

    return (
        <Table.Row>
            <td className="col-span-4">{skill.id}</td>
            <td className="col-span-6 text-left">{skill.name}</td>
            <td className="col-span-2">
                <UilTimesSquare onClick={() => mutate(skill.id)} />
            </td>
        </Table.Row>
    )
}

export default SkillRow
