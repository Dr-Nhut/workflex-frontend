import Input from '../../common/Input'
import { UilMessage } from '@iconscout/react-unicons'
import Button from '../../common/buttons/Button'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addMessage } from '../../services/apiMessage'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import toast from 'react-hot-toast'
function SendMainMessage({ partner }) {
    const queryClient = useQueryClient()
    const { user, socket } = useContext(UserContext)
    const { register, reset, handleSubmit } = useForm()

    const { mutate } = useMutation({
        mutationFn: addMessage,
        onSuccess: (response) => {
            reset()
            queryClient.invalidateQueries({
                queryKey: ['messages', user.id],
            })
            socket.emit('send-message', {
                from: user.id,
                to: partner.id,
                message: response.message,
            })
        },
        onError: () => toast.error('Lỗi gửi tin nhắn'),
    })

    const onSubmit = (data) => {
        mutate({
            from: user.id,
            to: partner.id,
            message: data.msg,
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute bottom-24 flex w-full p-4"
        >
            <Input
                placeholder="Soạn tin..."
                register={register('msg', { required: true, maxLength: 10000 })}
            />
            <Button type="btn-text">
                <UilMessage className="text-primary" />
            </Button>
        </form>
    )
}

export default SendMainMessage
