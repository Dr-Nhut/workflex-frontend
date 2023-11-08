import {
    UilApps,
    UilFileSearchAlt,
    UilBriefcase,
    UilBars,
} from '@iconscout/react-unicons'

import Avatar from './Avatar'
import ListItem from './ListItem'
import UserName from './UserName'
import { useContext, useState } from 'react'
import { UserContext } from '../features/user/userSlice'
import { URL_SERVER_SIMPLE } from '../constants'
import Button from '../common/buttons/Button'

function DashboardSidebar() {
    const [isOpenSidebar, setIsOpenSidebar] = useState(true)
    const { user } = useContext(UserContext)

    const employer = user.role === 'emp'
    return (
        <div
            className="col-span-2 px-2
            pt-4"
        >
            <header className="relative flex flex-col items-center gap-y-2">
                <Avatar image={`${URL_SERVER_SIMPLE}${user.avatar}`} />
                <UserName dark>{user.fullname}</UserName>
                <Button
                    onClick={() => setIsOpenSidebar((pre) => !pre)}
                    type="btn-text"
                    className="absolute -top-4 right-0"
                >
                    <UilBars />
                </Button>
            </header>

            <main className="grid gap-y-2 text-xl">
                <ListItem to="/dashboard" icon={<UilApps />}>
                    Tổng quan
                </ListItem>

                <ListItem
                    to={employer ? 'employer-job' : '/freelancer-jobs/bids'}
                    icon={<UilBriefcase />}
                >
                    {employer ? 'Quản lý công việc' : 'Công việc của bạn'}
                </ListItem>

                <ListItem
                    to={employer ? '/find-freelancer' : '/freelancer-findwork'}
                    icon={<UilFileSearchAlt />}
                >
                    {employer ? 'Tìm freelancer' : 'Tìm việc'}
                </ListItem>
            </main>
        </div>
    )
}

export default DashboardSidebar
