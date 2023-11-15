import { useQuery } from '@tanstack/react-query'
import { getInfor } from '../services/apiUser'
import Avatar from '../ui/Avatar'
import { URL_SERVER_SIMPLE } from '../constants'

function FileMessageItem({ host, children, senderId }) {
    const { isLoading, data: userInfor } = useQuery({
        queryKey: ['userInfor', senderId],
        queryFn: () => getInfor(senderId),
    })

    if (isLoading) return null

    return (
        <div className={`mb-4 flex w-full ${host && 'justify-end'}`}>
            {host && (
                <span className="mr-2 rounded-xl bg-stone-300 p-2">
                    {children}
                </span>
            )}
            <Avatar
                image={`${URL_SERVER_SIMPLE}${userInfor.avatar}`}
                type="small"
            />
            {!host && (
                <span className="ml-2 rounded-xl bg-stone-300 p-2">
                    {children}
                </span>
            )}
        </div>
    )
}

export default FileMessageItem
