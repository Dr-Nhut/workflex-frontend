import { NavLink, Outlet } from 'react-router-dom'

function ManagerJob() {
    return (
        <div className="h-[calc(100vh-194px)]">
            <div className="flex border-b px-6 text-center text-lg font-semibold text-stone-400">
                <NavLink
                    to="/admin/job-manager/pending"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Duyệt công việc
                </NavLink>

                <NavLink
                    to="/admin/job-manager/current"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang thực hiện
                </NavLink>

                <NavLink
                    to="/admin/job-manager/completed"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang hoàn thành
                </NavLink>

                <NavLink
                    to="/admin/job-manager/payment"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Thanh toán
                </NavLink>
            </div>

            <Outlet />
        </div>
    )
}

export default ManagerJob
