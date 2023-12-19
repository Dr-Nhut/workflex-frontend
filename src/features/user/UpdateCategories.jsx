import 'react-datepicker/dist/react-datepicker.css'
import Button from '../../common/buttons/Button'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import SelectFetching from '../../common/SelectFetching'
import { updateCateogries } from '../../services/apiCategory'

function UpdateCategories({
    onCloseModal,
}) {
    const { user } = useContext(UserContext)
    const queryClient = useQueryClient()
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { mutate, isLoading } = useMutation({
        mutationFn: updateCateogries,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['category', user.id]})
            toast.success('Cập nhật lĩnh vực thành công')
            onCloseModal()
        },
        onError: (err) => toast.error(err.message),
    })

    const onSubmit = (data) => {
        const categories = data.categories.map(item => item.value)
        mutate({id: user.id, categories})
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='min-w-[500px] min-h-[500px]'>
            <Controller
                control={control}
                name="categories"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <SelectFetching
                        className="mt-4"
                        value={value}
                        onChange={onChange}
                        placeholder="Lĩnh vực"
                        urlOptions={'/category/all'}
                        isMulti
                    />
                )}
            />
            {errors.categories && (
                <p className="text-red-500">Vui lòng chọn lĩnh vực của bạn.</p>
            )}

            <div className="mt-4 flex justify-end gap-x-4">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy bỏ
                </Button>
                <Button type="btn-primary" className="rounded-xl">
                    {isLoading ? <Spinner /> : 'Cập nhật lĩnh vực'}
                </Button>
            </div>
        </form>
    )
}

export default UpdateCategories
