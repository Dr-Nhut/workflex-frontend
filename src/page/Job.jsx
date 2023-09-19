import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import JobSidebar from '../features/jobs/JobSidebar'
import JobFilters from '../features/jobs/JobFilters'
import JobList from '../features/jobs/JobList'

function Job() {
    return (
        <div>
            <PageHeader />
            <SidebarLayout sidebar={<JobSidebar />} right>
                <JobFilters />
                <JobList />
            </SidebarLayout>
        </div>
    )
}

export default Job
