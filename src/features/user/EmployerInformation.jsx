import { useQuery } from '@tanstack/react-query'
import UserCard from './UserCard'
import { getInfor } from '../../services/apiUser'
import { URL_SERVER_SIMPLE } from '../../constants'
import { Link } from 'react-router-dom'

function EmployerInformation({ employerId }) {
    const { isLoading, data: user } = useQuery({
        queryKey: ['userInfor', employerId],
        queryFn: () => getInfor(employerId),
    })

    if (isLoading) return null

    return (
        <Link to={`/profile/${employerId}`}>
            <UserCard
                fullName={user.fullname}
                avatarUrl={`${URL_SERVER_SIMPLE}${user.avatar}`}
            >
                {user.email}
            </UserCard>
        </Link>
    )
}

export default EmployerInformation
