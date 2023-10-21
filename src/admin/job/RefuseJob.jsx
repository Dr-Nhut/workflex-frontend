import { useForm } from 'react-hook-form'
import TextArea from '../../common/TextArea'
import Button from '../../common/buttons/Button'
import { useMutation } from '@tanstack/react-query'
import { approvalJob } from '../../services/apiJob'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../ui/Spinner'

function RefuseJob({ onCloseModal }) {
    const id = useParams().id
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { isLoading, mutate } = useMutation({
        mutationFn: approvalJob,
        onSuccess: (response) => {
            toast.success(response.data.message)
            navigate(-1)
        },
        onError: (err) => console.log(err),
    })

    const onSubmit = (data) => {
        mutate({
            id,
            payload: { approval: false, reasonRefused: data.reasonRefuse },
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 w-[400px]">
            <TextArea
                register={register('reasonRefuse', { required: true })}
                placeholder="Lý do từ chối công việc này..."
                error={errors.reasonRefuse}
            />

            <div className="flex justify-end gap-x-2">
                <Button onClick={onCloseModal} type="btn-text">
                    Hủy
                </Button>
                <Button type="btn-primary" className="rounded-lg">
                    {isLoading ? <Spinner /> : 'Xác nhận'}
                </Button>
            </div>
        </form>
    )
}

export default RefuseJob
