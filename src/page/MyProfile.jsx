import { useState } from 'react'
import UserProfileCard from '../features/user/UserProfileCard'
import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import Tab from '../ui/Tab'
import Overview from '../features/user/Overview'
import UpdateProfile from '../features/user/Setting'

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
    const [isActive, setIsActive] = useState(1)

    return (
        <>
            <PageHeader />
            <SidebarLayout sidebar={<UserProfileCard />}>
                <div className="ml-8 border">
                    <Tab tabs={tabs} active={isActive} onClick={setIsActive}>
                        {isActive === 1 && <Overview />}
                        {isActive === 2 && <UpdateProfile />}
                    </Tab>
                </div>
            </SidebarLayout>
        </>
    )
}

export default MyProfile
