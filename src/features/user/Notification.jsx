import { UilBell } from '@iconscout/react-unicons'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './userSlice'
import { useQuery } from '@tanstack/react-query'
import { getNotifications } from '../../services/apiNotification'
import { PortalWithState } from 'react-portal'
import NotificationItem from '../../ui/NotificationItem'
import { Link } from 'react-router-dom'

function Notification() {
    const { user, socket } = useContext(UserContext)

    const [notifications, setNotifications] = useState([])

    const { isLoading } = useQuery({
        queryKey: ['notifications', user.id],
        queryFn: () => getNotifications(user.id),
        onSuccess: (data) => {
            setNotifications(data || [])
        },
    })

    useEffect(() => {
        function handler(data) {
            console.log(data)
            setNotifications((pre) => [...pre, data])
        }
        socket?.on('getNotification', handler)

        return () => {
            socket?.off('getNotification', handler)
        }
    }, [socket])

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <>
                    <div
                        onClick={isOpen ? closePortal : openPortal}
                        className="relative cursor-pointer"
                    >
                        <UilBell className="relative text-stone-200 hover:text-stone-300" />
                        <span className="absolute -top-2 left-2 rounded-full bg-red-500 px-2 text-sm text-stone-50">
                            {!isLoading &&
                            notifications.filter(
                                (notification) => notification.seen === 0
                            ).length > 5
                                ? '5+'
                                : notifications.filter(
                                      (notification) => notification.seen === 0
                                  ).length}
                        </span>
                    </div>
                    {portal(
                        <div className="fixed right-[295px] top-14 z-50 w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                            <h4 className="border-b-2 border-stone-500 pb-2 font-semibold text-stone-800">
                                Thông báo mới
                            </h4>

                            {notifications.length > 0 ? (
                                <>
                                    <ul>
                                        {[...notifications]
                                            ?.slice(0, 5)
                                            .map((item, index) => (
                                                <NotificationItem
                                                    key={index}
                                                    id={item.id}
                                                    senderId={item.senderId}
                                                    description={
                                                        item.description
                                                    }
                                                    createdAt={item.createdAt}
                                                    type={item.type}
                                                    seen={item.seen}
                                                    onClick={closePortal}
                                                />
                                            ))}
                                    </ul>
                                    <Link
                                        to="/notifications"
                                        className="font-semibold text-blue-500"
                                    >
                                        Xem tất cả
                                    </Link>
                                </>
                            ) : (
                                <span>Không có thông báo mới.</span>
                            )}
                        </div>
                    )}
                </>
            )}
        </PortalWithState>
    )
}

export default Notification
