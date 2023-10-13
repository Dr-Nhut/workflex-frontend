import { UilAngleDown } from '@iconscout/react-unicons'
import { useState } from 'react'
import Modal from '../../ui/Modal'
import UserName from '../../ui/UserName'
import { UilClipboardNotes, UilSignout } from '@iconscout/react-unicons'
import ListItem from '../../ui/ListItem'
import Avatar from '../../ui/Avatar'
import { useContext } from 'react'
import { UserContext } from './userSlice'
import { useNavigate } from 'react-router-dom'

function UserOption() {
    const { user, dispatch } = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch({ type: 'users/logout' })
        navigate('/login')
    }
    return (
        <div
            className="relative flex cursor-pointer items-center gap-x-2"
            onClick={() => setIsOpen((pre) => !pre)}
        >
            <Avatar
                image="https://i.pravatar.cc/150?u=a042581f4e29026awsl"
                type="smallImage"
            />
            <div className="flex">
                <UserName>{user.fullname.split(' ').at(-1)}</UserName>
                <UilAngleDown className="text-stone-50" />
            </div>

            {isOpen && (
                <Modal>
                    <ListItem to="/my-profile" icon={<UilClipboardNotes />}>
                        Quản lý hồ sơ
                    </ListItem>
                    <ListItem onClick={handleLogout} icon={<UilSignout />}>
                        Đăng xuất
                    </ListItem>
                </Modal>
            )}
        </div>
    )
}

export default UserOption
