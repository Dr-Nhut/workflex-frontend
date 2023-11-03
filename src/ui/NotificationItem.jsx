import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { URL_SERVER_SIMPLE } from '../constants'
import formatFullTime from '../utils/formatFullTime'
import { getInfor } from '../services/apiUser'
import Avatar from './Avatar'
import useInforNotification from '../hooks/useInforNotification'
import { seenNotification } from '../services/apiNotification'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'

function NotificationItem({
    id,
    senderId,
    description,
    createdAt,
    type,
    onClick,
    seen,
}) {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const { isLoading, data: sender } = useQuery({
        queryKey: ['sender', senderId],
        queryFn: () => getInfor(senderId),
    })

    const [notificationInfor, locationInfor] = useInforNotification(
        sender?.fullname,
        description,
        type
    )

    const { mutate } = useMutation({
        mutationFn: seenNotification,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['notifications', user.id],
            })
        },
    })

    const handleOnClick = () => {
        mutate(id)
        navigate(locationInfor)
        onClick()
    }

    return (
        <li
            className={`my-2 cursor-pointer rounded-xl p-2 hover:bg-stone-200 ${
                seen ? 'bg-stone-50' : ''
            }`}
            onClick={handleOnClick}
        >
            {!isLoading && (
                <div className="flex items-center gap-x-2">
                    <Avatar
                        image={`${URL_SERVER_SIMPLE}${sender.avatar}`}
                        type="smallImage"
                    />
                    <div className="ml-2 ">
                        <p
                            dangerouslySetInnerHTML={{
                                __html: notificationInfor,
                            }}
                        />
                        <span className="text-stone-500">
                            {formatFullTime(createdAt)}
                        </span>
                    </div>
                </div>
            )}
        </li>
    )
}

export default NotificationItem
