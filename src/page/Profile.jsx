import UserProfileCard from '../features/user/UserProfileCard'
import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import Tab from '../ui/Tab'
import Overview from '../features/user/Overview'
import { useParams } from 'react-router-dom'

const tabs = [
    {
        id: 1,
        name: 'Tổng quan',
    },
]

function Profile() {
    const userId = useParams().id
    return (
        <>
            <PageHeader />
            <SidebarLayout sidebar={<UserProfileCard userId={userId} />}>
                <div className="ml-8 border min-h-[600px]">
                    <Tab tabs={tabs} active={1}>
                        <Overview userId={userId} />
                    </Tab>
                </div>
            </SidebarLayout>
        </>
    )
}

export default Profile
