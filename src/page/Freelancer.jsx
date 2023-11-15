import { useContext } from 'react'
import FreelancerList from '../features/user/FreelancerList'
import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import { UserContext } from '../features/user/userSlice'
import FindFreelancerSidebar from '../features/jobs/FindFreelancerSidebar'

function Freelancer() {
    const { user } = useContext(UserContext)

    return (
        <div>
            <PageHeader
                title="Freelancer nổi bật"
                description="Những freelancer tài năng ở khắp các lĩnh vực Công nghệ thông tin đã tụ hợp ở đây"
            />
            <SidebarLayout
                fullWidth
                sidebar={<FindFreelancerSidebar />}
                right={user}
            >
                {/* <JobFilters /> */}
                <FreelancerList />
            </SidebarLayout>
        </div>
    )
}

export default Freelancer
