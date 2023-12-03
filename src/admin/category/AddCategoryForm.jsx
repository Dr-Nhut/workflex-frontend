import { useForm } from 'react-hook-form'
import Input from '../../common/Input'
import Button from '../../common/buttons/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCategory } from '../../services/apiCategory'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'

function AddCategoryForm({ onCloseModal }) {
    const queryClient = useQueryClient()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { isLoading, mutate } = useMutation({
        mutationFn: createCategory,
        onSuccess: () => {
            toast.success('Thêm lĩnh vực thành công')
            queryClient.invalidateQueries({ queryKey: ['all-categories'] })
            onCloseModal()
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })

    return (
        <form onSubmit={handleSubmit(mutate)}>
            <Input
                label="Tên lĩnh vực"
                placeholder="Nhập tên lĩnh vực"
                register={register('name', { required: true })}
                error={errors.name}
            />
            <Button type="btn-primary" className="mx-auto rounded-lg">
                {isLoading ? <Spinner /> : 'Thêm'}
            </Button>
        </form>
    )
}

export default AddCategoryForm
