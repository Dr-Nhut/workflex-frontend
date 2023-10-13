import { useContext } from 'react'
import JobFilters from '../features/jobs/JobFilters'
import JobSidebar from '../features/jobs/JobSidebar'
import FreelancerList from '../features/user/FreelancerList'
import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import { UserContext } from '../features/user/userSlice'

function Freelancer() {
    const { user } = useContext(UserContext)

    return (
        <div>
            <PageHeader
                title="Freelancer nổi bật"
                description="Những freelancer tài năng ở khắp các lĩnh vực Công nghệ thông tin đã tụ hợp ở đây"
            />
            <SidebarLayout sidebar={<JobSidebar />} right={user}>
                <JobFilters />
                <FreelancerList />
            </SidebarLayout>
        </div>
    )
}

export default Freelancer
