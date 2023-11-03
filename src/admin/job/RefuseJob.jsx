import { useForm } from 'react-hook-form'
import TextArea from '../../common/TextArea'
import Button from '../../common/buttons/Button'
import { useMutation } from '@tanstack/react-query'
import { approvalJob } from '../../services/apiJob'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../../ui/Spinner'
import { useContext } from 'react'
import { UserContext } from '../../features/user/userSlice'
import { createNotification } from '../../services/apiNotification'

function RefuseJob({ onCloseModal, jobDetail }) {
    const { socket, user } = useContext(UserContext)
    const id = useParams().id
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { mutate: mutateCreateNotification } = useMutation({
        mutationFn: createNotification,
        onError: (err) => {
            toast.error(err.message)
        },
    })

    const { isLoading, mutate } = useMutation({
        mutationFn: approvalJob,
        onSuccess: (response) => {
            toast.success(response.data.message)
            navigate(-1)
            socket.emit('sendFromAdminToEmployer', {
                receiverId: jobDetail.employerId,
                description: jobDetail.name,
                type: response.data.type === 'approval' ? 1 : 2,
            })
            mutateCreateNotification({
                senderId: user.id,
                receiverId: jobDetail.employerId,
                description: jobDetail.name,
                type: response.data.type === 'approval' ? 1 : 2,
            })
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
