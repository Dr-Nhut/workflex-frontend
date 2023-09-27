import SidebarLayout from '../layouts/SidebarLayout'
import PageHeader from '../ui/PageHeader'
import JobSidebar from '../features/jobs/JobSidebar'
import JobFilters from '../features/jobs/JobFilters'
import JobList from '../features/jobs/JobList'
import { useState } from 'react'

function FindWork() {
    const [user] = useState(true)
    return (
        <div>
            <PageHeader
                title="Việc làm Freelance"
                description="Hàng trăm công việc khắp các lĩnh vực đang chờ đợi bạn"
            />
            <SidebarLayout sidebar={<JobSidebar right={user} />} right={user}>
                <JobFilters />
                <JobList />
            </SidebarLayout>
        </div>
    )
}

export default FindWork
