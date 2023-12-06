import { useContext, useState } from 'react'
import UserProfileCard from '../features/user/UserProfileCard'
import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import Tab from '../ui/Tab'
import Overview from '../features/user/Overview'
import UpdateProfile from '../features/user/Setting'
import { UserContext } from '../features/user/userSlice'

const tabs = [
    {
        id: 1,
        name: 'Tổng quan',
    },
    {
        id: 2,
        name: 'Cập nhật',
    },
]

function MyProfile() {
    const { user } = useContext(UserContext)
    const [isActive, setIsActive] = useState(1)
    return (
        <div className="min-h-[610px]">
            <PageHeader />
            <SidebarLayout sidebar={<UserProfileCard userId={user.id} />}>
                <div className="ml-8 border">
                    <Tab tabs={tabs} active={isActive} onClick={setIsActive}>
                        {isActive === 1 && <Overview userId={user.id} />}
                        {isActive === 2 && <UpdateProfile />}
                    </Tab>
                </div>
            </SidebarLayout>
        </div>
    )
}

export default MyProfile
