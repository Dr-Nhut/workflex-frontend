import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import Button from '../../common/buttons/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import { createSkill } from '../../services/apiSkill'

function AddSkillForm({ onCloseModal }) {
    const queryClient = useQueryClient()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { isLoading, mutate } = useMutation({
        mutationFn: createSkill,
        onSuccess: () => {
            toast.success('Thêm ngôn ngữ lập trình thành công')
            queryClient.invalidateQueries({ queryKey: ['all-skills'] })
            onCloseModal()
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })

    return (
        <form onSubmit={handleSubmit(mutate)}>
            <Input
                label="Tên ngôn ngữ lập trình"
                placeholder="Nhập tên ngôn ngữ lập trình"
                register={register('name', { required: true })}
                error={errors.name}
            />
            <Button type="btn-primary" className="mx-auto rounded-lg">
                {isLoading ? <Spinner /> : 'Thêm'}
            </Button>
        </form>
    )
}

export default AddSkillForm
