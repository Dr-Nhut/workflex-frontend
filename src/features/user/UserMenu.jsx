import Button from '../../common/buttons/Button'
import Inbox from './Inbox'
import Notification from './Notification'
import UserOption from './UserOption'
import PostJob from '../jobs/PostJob'
import Modal from '../../ui/Modal-v1'

function UserMenu({ role }) {
    return (
        <div className="flex items-center gap-x-6">
            {role === 'emp' && (
                <Modal>
                    <Modal.Open opens="post-job">
                        <Button type="btn-primary" className="rounded-xl">
                            Đăng việc
                        </Button>
                    </Modal.Open>
                    <Modal.Window name="post-job" title="Đăng việc làm">
                        <PostJob />
                    </Modal.Window>
                </Modal>
            )}
            <Notification />
            <Inbox />
            <UserOption />
        </div>
    )
}

export default UserMenu
