import {
    UilApps,
    UilFileSearchAlt,
    UilBriefcase,
    UilBars,
} from '@iconscout/react-unicons'

import Avatar from './Avatar'
import ListItem from './ListItem'
import UserName from './UserName'

function DashboardSidebar() {
    return (
        <div className="col-span-2 mt-4">
            <header className="relative flex flex-col items-center gap-y-2">
                <Avatar image="https://i.pravatar.cc/150?u=a042581f4e29026awsl" />
                <UserName dark>Lê Minh Nhựt</UserName>
                <UilBars className="absolute right-0 cursor-pointer hover:text-stone-500" />
            </header>

            <main className="grid gap-y-2 text-xl">
                <ListItem to="/dashboard" icon={<UilApps />}>
                    Tổng quan
                </ListItem>

                <ListItem to="/myjob" icon={<UilBriefcase />}>
                    Công việc của bạn
                </ListItem>

                <ListItem to="/freelancer-findwork" icon={<UilFileSearchAlt />}>
                    Tìm việc
                </ListItem>
            </main>
        </div>
    )
}

export default DashboardSidebar
