import SidebarLayout from './SidebarLayout'
import DashboardSidebar from '../ui/DashboardSidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
    return (
        <SidebarLayout
            fullWidth
            mainWidth="col-span-10"
            sidebar={<DashboardSidebar />}
        >
            <Outlet />
        </SidebarLayout>
    )
}

export default DashboardLayout
