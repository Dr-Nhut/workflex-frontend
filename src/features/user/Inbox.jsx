import { UilComment } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import { Portal, PortalWithState } from 'react-portal'
import { Link } from 'react-router-dom'
import { getMessagesByUser } from '../../services/apiMessage'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from './userSlice'
import MessagerItem from '../../ui/MessagerItem'
import UserCard from './UserCard'
import { UilMultiply } from '@iconscout/react-unicons'
import { URL_SERVER_SIMPLE } from '../../constants'
import MessageMainContainer from '../../ui/MessageMainContainer'
import SendMainMessage from '../jobs/SendMainMessage'

function Inbox() {
    const { user, socket } = useContext(UserContext)

    const [messages, setMessages] = useState([])

    console.log('mes ', messages)

    const [isOpenChat, setIsOpenChat] = useState(false)
    const [partner, setPartner] = useState()

    const { isLoading } = useQuery({
        queryKey: ['messages', user.id],
        queryFn: () => getMessagesByUser(user.id),
        onSuccess: (data) => {
            user.role === 'adm'
                ? setMessages(data || [])
                : setMessages(
                      data.filter(
                          (item) =>
                              !item.users.includes(
                                  'a68af9ff-7835-426e-b9e1-3c3dd081a40b'
                              )
                      ) || []
                  )
        },
    })

    useEffect(() => {
        function handler(data) {
            if (data.users.includes('a68af9ff-7835-426e-b9e1-3c3dd081a40b')) {
                return
            }
            const isExists = messages.find((message) =>
                message.users.includes(data.from)
            )
            console.log('data: ', data)
            const newMessage = {
                fromSelt: false,
                message: data.message,
                createdAt: data.createdAt,
                seen: false,
                users: [data.from, user.id],
            }
            if (isExists) {
                setMessages((pre) =>
                    pre.map((message) =>
                        message.id === isExists.id ? newMessage : message
                    )
                )
            } else {
                setMessages((pre) => [...pre, newMessage])
            }
        }
        socket?.on('msg-receive', handler)

        return () => {
            socket?.off('msg-receive', handler)
        }
    }, [socket])

    return (
        <>
            <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <>
                        <div
                            onClick={isOpen ? closePortal : openPortal}
                            className="relative cursor-pointer"
                        >
                            <UilComment className="relative text-stone-200 hover:text-stone-300" />
                            <span className="absolute -top-2 left-2 rounded-full bg-red-500 px-2 text-sm text-stone-50">
                                {!isLoading &&
                                messages.filter(
                                    (msg) =>
                                        msg.seen === false &&
                                        msg.fromSelt === false
                                ).length > 5
                                    ? '5+'
                                    : messages?.filter(
                                          (msg) =>
                                              msg.seen === false &&
                                              msg.fromSelt === false
                                      )?.length}
                            </span>
                        </div>
                        {portal(
                            <div className="fixed right-[275px] top-14 z-50 w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                                <h4 className="border-b-2 border-stone-500 pb-2 font-semibold text-stone-800">
                                    Tin nhắn mới
                                </h4>

                                {messages?.length > 0 ? (
                                    <>
                                        <ul>
                                            {[...messages]
                                                .sort(
                                                    (a, b) =>
                                                        new Date(b.createdAt) -
                                                        new Date(a.createdAt)
                                                )
                                                ?.slice(0, 5)
                                                .map((item, index) => (
                                                    <MessagerItem
                                                        key={index}
                                                        msg={item}
                                                        onClosePortal={
                                                            closePortal
                                                        }
                                                        onClick={setIsOpenChat}
                                                        setPartner={setPartner}
                                                    />
                                                ))}
                                        </ul>
                                        <Link
                                            to="/messages"
                                            className="font-semibold text-blue-500"
                                        >
                                            Xem tất cả
                                        </Link>
                                    </>
                                ) : (
                                    <span>Bạn chưa có tin nhắn.</span>
                                )}
                            </div>
                        )}
                    </>
                )}
            </PortalWithState>

            {isOpenChat && (
                <Portal node={document.getElementById('root')}>
                    <div className="animate__animated animate__fadeInRight fixed right-0 top-20 z-50 h-full w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                        <div className="flex items-center justify-between border-b border-stone-400 pb-2 font-semibold text-stone-800">
                            <UserCard
                                fullName={partner.fullname}
                                avatarUrl={`${URL_SERVER_SIMPLE}${partner.avatar}`}
                            />
                            <UilMultiply
                                className="cursor-pointer hover:text-stone-500"
                                onClick={() => setIsOpenChat(false)}
                            />
                        </div>

                        <div className="p-4">
                            <MessageMainContainer partner={partner} />
                        </div>

                        <SendMainMessage partner={partner} />
                    </div>
                </Portal>
            )}
        </>
    )
}

export default Inbox
