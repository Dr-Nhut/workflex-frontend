import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import JobSidebar from '../features/jobs/JobSidebar'
import JobFilters from '../features/jobs/JobFilters'
import JobList from '../features/jobs/JobList'

function Job() {
    return (
        <div>
            <PageHeader
                title="Việc làm Freelance"
                description="Hàng trăm công việc khắp các lĩnh vực đang chờ đợi bạn"
            />
            <SidebarLayout sidebar={<JobSidebar />}>
                <JobFilters />
                <JobList />
            </SidebarLayout>
        </div>
    )
}

export default Job
