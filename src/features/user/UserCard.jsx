import Avatar from '../../ui/Avatar'
import UserName from '../../ui/UserName'

function UserCard({ fullName, avatarUrl, children }) {
    return (
        <div className="flex items-center gap-x-2">
            <Avatar image={avatarUrl} type="smallImage" />
            <div>
                <UserName dark>{fullName}</UserName>
                {children}
            </div>
        </div>
    )
}

export default UserCard
