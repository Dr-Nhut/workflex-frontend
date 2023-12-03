import { useQuery } from '@tanstack/react-query'
import { URL_SERVER_SIMPLE } from '../constants'
import formatFullTime from '../utils/formatFullTime'
import Avatar from './Avatar'
import { getInfor } from '../services/apiUser'
import { Portal, PortalWithState } from 'react-portal'
import UserCard from '../features/user/UserCard'
import { UilMultiply } from '@iconscout/react-unicons'
import { useState } from 'react'

function MessagerItem({ msg, onClosePortal }) {
    const [isOpen, setIsOpen] = useState(false)
    const { id, fromSelt, users, message, seen, createdAt } = msg
    // const queryClient = useQueryClient()

    const { isLoading, data: conversationPartner } = useQuery({
        queryKey: ['conversationPartner', id],
        queryFn: () => getInfor(fromSelt ? users[1] : users[0]),
    })

    // const handleOnClick = () => {}

    // return (
    // <li
    //     className={`my-2 cursor-pointer rounded-xl p-2 hover:bg-stone-200 ${
    //         seen ? 'bg-stone-50' : 'bg-stone-300'
    //     }`}
    //     // onClick={handleOnClick}
    // >
    //     {!isLoading && (
    //         <div className="flex items-center gap-x-2">
    //             <Avatar
    //                 image={`${URL_SERVER_SIMPLE}${conversationPartner.avatar}`}
    //                 type="smallImage"
    //             />
    //             <div className="ml-2 ">
    //                 <p>{message}</p>
    //                 <span className="text-stone-500">
    //                     {formatFullTime(createdAt)}
    //                 </span>
    //             </div>
    //         </div>
    //     )}
    // </li>
    // )

    return (
        <>
            <div
                onClick={() => {
                    onClosePortal()
                    setIsOpen(true)
                }}
                className="relative cursor-pointer"
            >
                <li
                    className={`my-2 cursor-pointer rounded-xl p-2 hover:bg-stone-200 ${
                        seen ? 'bg-stone-50' : 'bg-stone-300'
                    }`}
                >
                    {!isLoading && (
                        <div className="flex items-center gap-x-2">
                            <Avatar
                                image={`${URL_SERVER_SIMPLE}${conversationPartner.avatar}`}
                                type="smallImage"
                            />
                            <div className="ml-2 ">
                                <p>{message}</p>
                                <span className="text-stone-500">
                                    {formatFullTime(createdAt)}
                                </span>
                            </div>
                        </div>
                    )}
                </li>
            </div>

            {isOpen && (
                <Portal node={document.getElementById('root')}>
                    <div className="fixed right-0 top-20 z-50 h-full w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                        <div className="flex items-center justify-between border-b border-stone-400 pb-2 font-semibold text-stone-800">
                            <UserCard
                                fullName={conversationPartner.fullname}
                                avatarUrl={`${URL_SERVER_SIMPLE}${conversationPartner.avatar}`}
                            />
                            <UilMultiply />
                        </div>
                    </div>
                </Portal>
            )}
        </>
    )
}

export default MessagerItem
