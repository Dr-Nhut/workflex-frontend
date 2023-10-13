import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectComponent() {
    const { user } = useContext(UserContext)
    if (user.id) return <Navigate to="/dashboard" replace />
    return <Outlet />
}

export default ProtectComponent
