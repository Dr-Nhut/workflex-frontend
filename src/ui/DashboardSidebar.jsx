import {
    UilApps,
    UilFileSearchAlt,
    UilBriefcase,
    UilBars,
} from '@iconscout/react-unicons'

import Avatar from './Avatar'
import ListItem from './ListItem'
import UserName from './UserName'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'
import { URL_SERVER_SIMPLE } from '../constants'

function DashboardSidebar() {
    const { user } = useContext(UserContext)

    const employer = user.role === 'emp'
    return (
        <div className="col-span-2 mt-4">
            <header className="relative flex flex-col items-center gap-y-2">
                <Avatar image={`${URL_SERVER_SIMPLE}${user.avatar}`} />
                <UserName dark>{user.fullname}</UserName>
                <UilBars className="absolute right-0 cursor-pointer hover:text-stone-500" />
            </header>

            <main className="grid gap-y-2 text-xl">
                <ListItem to="/dashboard" icon={<UilApps />}>
                    Tổng quan
                </ListItem>

                <ListItem
                    to={employer ? 'employer-job' : '/freelancer-jobs'}
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
