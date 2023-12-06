import {
    // UilApps,
    // UilFileSearchAlt,
    UilBriefcase,
    UilBars,
    UilUsersAlt,
    UilBill,
    UilGameStructure,
} from '@iconscout/react-unicons'

import Avatar from './Avatar'
import ListItem from './ListItem'
import UserName from './UserName'

function DashboardSidebar() {
    return (
        <div className="col-span-2 mt-4">
            <header className="relative flex flex-col items-center gap-y-2">
                <Avatar image="http://localhost:3000/avatar-default/admin.png" />
                <UserName dark>Admin</UserName>
                <UilBars className="absolute right-0 cursor-pointer hover:text-stone-500" />
            </header>

            <main className="grid gap-y-2 text-xl">
                <ListItem to="/admin/job-pending" icon={<UilBriefcase />}>
                    Quản lý việc làm
                </ListItem>

                <ListItem to="/admin/job-payment" icon={<UilBill />}>
                    Quản lý thanh toán
                </ListItem>

                <ListItem to="/admin/account-manager" icon={<UilUsersAlt />}>
                    Quản lý tài khoản
                </ListItem>

                <ListItem
                    to="/admin/category-manager"
                    icon={<UilGameStructure />}
                >
                    Quản lý lĩnh vực
                </ListItem>
            </main>
        </div>
    )
}

export default DashboardSidebar
