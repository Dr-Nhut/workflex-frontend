import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { UserContext } from '../features/user/userSlice'

function FreelancerJob() {
    const {user} = useContext(UserContext);

    if(user.role !== 'fre') return null
    return (
        <div className="min-h-[600px]">
            <div className="flex border-b px-6 text-center text-lg font-semibold text-stone-400">
                <NavLink
                    to="/freelancer-jobs/favarious"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang quan tâm
                </NavLink>

                <NavLink
                    to="/freelancer-jobs/bids"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang chào giá
                </NavLink>

                <NavLink
                    to="/freelancer-jobs/current"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang thực hiện
                </NavLink>

                <NavLink
                    to="/freelancer-jobs/completed"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đã hoàn thành
                </NavLink>

                <NavLink
                    to="/freelancer-jobs/paid"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đã được thanh toán
                </NavLink>
            </div>

            <Outlet />
        </div>
    )
}

export default FreelancerJob
