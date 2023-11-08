import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import JobSidebar from '../features/jobs/JobSidebar'
// import JobFilters from '../features/jobs/JobFilters'
import JobList from '../features/jobs/JobList'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'

function FindWork() {
    const { user } = useContext(UserContext)

    return (
        <div className="mx-8">
            <PageHeader
                title="Việc làm Freelance"
                description="Hàng trăm công việc khắp các lĩnh vực đang chờ đợi bạn"
            />
            <SidebarLayout
                fullWidth
                sidebar={<JobSidebar right={user} />}
                right={user}
            >
                {/* <JobFilters /> */}
                <JobList />
            </SidebarLayout>
        </div>
    )
}

export default FindWork
