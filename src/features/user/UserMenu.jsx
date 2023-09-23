import Inbox from './Inbox'
import Notification from './Notification'
import UserOption from './UserOption'

function UserMenu() {
    return (
        <div className="flex items-center gap-x-6">
            <Notification />
            <Inbox />
            <UserOption />
        </div>
    )
}

export default UserMenu
