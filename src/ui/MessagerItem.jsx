import { useQuery } from '@tanstack/react-query'
import { URL_SERVER_SIMPLE } from '../constants'
import formatFullTime from '../utils/formatFullTime'
import Avatar from './Avatar'
import { getInfor } from '../services/apiUser'
import UserCard from '../features/user/UserCard'

function MessagerItem({ msg, onClosePortal, onClick, setPartner }) {
    console.log(msg)
    const { id, fromSelt, users, message, seen, createdAt } = msg

    const { isLoading, data: conversationPartner } = useQuery({
        queryKey: ['conversationPartner', id],
        queryFn: () => getInfor(fromSelt ? users[1] : users[0]),
    })

    return (
        <>
            <div
                onClick={() => {
                    onClosePortal()
                    onClick(true)
                    setPartner({
                        ...conversationPartner,
                        id: fromSelt ? users[1] : users[0],
                    })
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
                            {/* <Avatar
                                image={`${URL_SERVER_SIMPLE}${conversationPartner.avatar}`}
                                type="smallImage"
                            />
                            <div className="ml-2 ">
                                <p>{message}</p>
                                <span className="text-stone-500">
                                    {formatFullTime(createdAt)}
                                </span>
                            </div> */}
                            <UserCard
                                fullName={conversationPartner.fullname}
                                avatarUrl={`${URL_SERVER_SIMPLE}${conversationPartner.avatar}`}
                            >
                                {message} - {formatFullTime(createdAt)}
                            </UserCard>
                        </div>
                    )}
                </li>
            </div>
        </>
    )
}

export default MessagerItem
