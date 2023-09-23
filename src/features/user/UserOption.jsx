import { UilAngleDown } from '@iconscout/react-unicons'
import { useState } from 'react'
import Modal from '../../ui/Modal'
import UserName from '../../ui/UserName'
import { UilClipboardNotes, UilSignout } from '@iconscout/react-unicons'
import ListItem from '../../ui/ListItem'
import Avatar from '../../ui/Avatar'

function UserOption() {
    const [isOpen, setIsOpen] = useState(false)
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
                <UserName>John</UserName>
                <UilAngleDown className="text-stone-50" />
            </div>

            {isOpen && (
                <Modal>
                    <ListItem to="/my-profile" icon={<UilClipboardNotes />}>
                        Quản lý hồ sơ
                    </ListItem>
                    <ListItem icon={<UilSignout />}>Đăng xuất</ListItem>
                </Modal>
            )}
        </div>
    )
}

export default UserOption
