import SidebarLayout from './SidebarLayout'
import DashboardSidebar from '../ui/DashboardSidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'

function DashboardLayout() {
    const { user } = useContext(UserContext)
    if (!user.id) return <Navigate to="/login" replace />
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
