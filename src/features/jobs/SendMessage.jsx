import Input from '../../common/Input'
import { UilMessage } from '@iconscout/react-unicons'
import Button from '../../common/buttons/Button'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addMessage } from '../../services/apiMessage'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
function SendMessage() {
    const queryClient = useQueryClient()
    const { user, socket } = useContext(UserContext)
    const [searchParams] = useSearchParams()
    const { register, reset, handleSubmit } = useForm()

    const { mutate } = useMutation({
        mutationFn: addMessage,
        onSuccess: (response) => {
            reset()
            queryClient.invalidateQueries({
                queryKey: ['messages', user.id, searchParams.get('partner')],
            })
            socket.emit('send-message', {
                from: user.id,
                to: searchParams.get('partner'),
                message: response.message,
            })
        },
        onError: () => toast.error('Lỗi gửi tin nhắn'),
    })

    const onSubmit = (data) => {
        mutate({
            from: user.id,
            to: searchParams.get('partner'),
            message: data.msg,
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute bottom-4 flex w-full"
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

export default SendMessage
