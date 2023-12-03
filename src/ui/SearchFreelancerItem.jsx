import { useNavigate } from 'react-router-dom'
import UserCard from '../features/user/UserCard'
import { URL_SERVER_SIMPLE } from '../constants'

function SearchFreelancerItem({
    fullname,
    avatar,
    email,
    id,
    onClosePortal,
    onChange,
    focus,
}) {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate(`/profile/${id}`)
        onClosePortal()
        onChange('')
    }

    return (
        <li
            className={`my-2 cursor-pointer rounded-xl p-2  hover:bg-stone-200 ${
                focus ? 'bg-stone-200' : 'bg-stone-50'
            }`}
            onClick={handleOnClick}
        >
            <UserCard
                fullName={fullname}
                avatarUrl={`${URL_SERVER_SIMPLE}${avatar}`}
            >
                {email}
            </UserCard>
        </li>
    )
}

export default SearchFreelancerItem
