import { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { UserContext } from '../features/user/userSlice'
import { getNotifications } from '../services/apiNotification'
import NotificationItem from '../ui/NotificationItem'
import Spinner from '../ui/Spinner'
import PageHeader from '../ui/PageHeader'

function Notification() {
    const { user } = useContext(UserContext)

    const { isLoading, data: notifications } = useQuery({
        queryKey: ['notifications', user.id],
        queryFn: () => getNotifications(user.id),
    })

    if (isLoading) return <Spinner />

    return (
        <div>
            <PageHeader title="Tất cả thông báo" />
            <div className="mx-auto w-2/3 rounded-lg bg-stone-50 p-4 shadow-lg">
                {notifications.length > 0 ? (
                    <>
                        <ul>
                            {notifications.map((item, index) => (
                                <NotificationItem
                                    key={index}
                                    id={item.id}
                                    senderId={item.senderId}
                                    description={item.description}
                                    createdAt={item.createdAt}
                                    type={item.type}
                                    seen={item.seen}
                                />
                            ))}
                        </ul>
                    </>
                ) : (
                    <span>Không có thông báo mới.</span>
                )}
            </div>
        </div>
    )
}

export default Notification
