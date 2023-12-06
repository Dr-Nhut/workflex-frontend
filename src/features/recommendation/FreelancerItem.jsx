import { useQuery } from '@tanstack/react-query'
import UserCard from '../user/UserCard'
import { getInfor } from '../../services/apiUser'
import { URL_SERVER_SIMPLE } from '../../constants'
import Button from '../../common/buttons/Button'
import { Link } from 'react-router-dom'

function FreelancerItem({ freelancerId }) {
    const { isLoading, data } = useQuery({
        queryKey: ['user-infor', freelancerId],
        queryFn: () => getInfor(freelancerId),
    })

    if (isLoading) return null

    return (
        <div className="mb-2 flex items-center justify-between rounded-lg bg-stone-50 p-4">
            <Link to={`/profile/${freelancerId}`}>
                <UserCard
                    fullName={data.fullname}
                    avatarUrl={`${URL_SERVER_SIMPLE}${data.avatar}`}
                >
                    {data.email}
                </UserCard>
            </Link>

            <Button type="btn-primary rounded-xl">Liên hệ</Button>
        </div>
    )
}

export default FreelancerItem
