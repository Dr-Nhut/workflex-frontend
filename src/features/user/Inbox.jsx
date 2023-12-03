import { UilComment } from '@iconscout/react-unicons'
import { useQuery } from '@tanstack/react-query'
import { PortalWithState } from 'react-portal'
import { Link } from 'react-router-dom'
import { getMessagesByUser } from '../../services/apiMessage'
import { useContext } from 'react'
import { UserContext } from './userSlice'
import MessagerItem from '../../ui/MessagerItem'
function Inbox() {
    const { user } = useContext(UserContext)

    const { isLoading, data: messages } = useQuery({
        queryKey: ['messages', user.id],
        queryFn: () => getMessagesByUser(user.id),
    })

    return (
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
                            messages.filter((msg) => msg.seen === false)
                                .length > 5
                                ? '5+'
                                : messages?.filter((msg) => msg.seen === false)
                                      ?.length}
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
                                            ?.slice(0, 5)
                                            .map((item, index) => (
                                                <MessagerItem
                                                    key={index}
                                                    msg={item}
                                                    onClosePortal={closePortal}
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
    )
}

export default Inbox
