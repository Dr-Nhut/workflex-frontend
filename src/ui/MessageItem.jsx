import { useQuery } from '@tanstack/react-query'
import Avatar from '../ui/Avatar'
import formatFullTime from '../utils/formatFullTime'
import { getInfor } from '../services/apiUser'
import { URL_SERVER_SIMPLE } from '../constants'

function MessageItem({ host, children, createdAt, senderId }) {
    const { data: userInfor } = useQuery({
        queryKey: ['userInfor', senderId],
        queryFn: () => getInfor(senderId),
    })

    return (
        <div className={`mb-4 flex w-full ${host && 'justify-end'}`}>
            {host && (
                <div className="mr-2 rounded-xl bg-stone-300 p-2">
                    <div>{children}</div>
                    <span className="text-right text-sm italic text-stone-400">
                        {formatFullTime(createdAt)}
                    </span>
                </div>
            )}
            <Avatar
                image={`${URL_SERVER_SIMPLE}${userInfor?.avatar}`}
                type="small"
            />
            {!host && (
                <div className="ml-2 rounded-xl bg-stone-50 p-2">
                    <p>{children}</p>
                    <span className="text-left text-sm italic text-stone-400">
                        {formatFullTime(createdAt)}
                    </span>
                </div>
            )}
        </div>
    )
}

export default MessageItem
