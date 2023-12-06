import SidebarLayout from './SidebarLayout'
import AdminDashboardSidebar from '../ui/AdminDashboardSidebar'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'

function DashboardLayout() {
    const { user } = useContext(UserContext)
    if (!user.id || user.role !== 'adm') return <Navigate to="/login" replace />
    return (
        <SidebarLayout
            fullWidth
            mainWidth="col-span-10"
            sidebar={<AdminDashboardSidebar />}
        >
            <div className="min-h-[600px] px-4 pb-10">
                <Outlet />
            </div>
        </SidebarLayout>
    )
}

export default DashboardLayout
