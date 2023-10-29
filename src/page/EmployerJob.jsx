import { NavLink, Outlet } from 'react-router-dom'

function EmployerJob() {
    return (
        <div className="h-[calc(100vh-194px)]">
            <div className="flex border-b px-6 text-center text-lg font-semibold text-stone-400">
                <NavLink
                    to="/employer-job/pending"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang chờ duyệt
                </NavLink>

                <NavLink
                    to="/employer-job/accepting-bids"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang nhận chào giá
                </NavLink>

                <NavLink
                    to="/employer-job/refused"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đăng thất bại
                </NavLink>

                <NavLink
                    to="/employer-job/current"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đang thực hiện
                </NavLink>

                <NavLink
                    to="/employer-job/completed"
                    className={({ isActive }) =>
                        isActive
                            ? 'activeTab cursor-pointer p-4 hover:text-sky-500'
                            : 'cursor-pointer p-4 hover:text-sky-500'
                    }
                >
                    Đã hoàn thành
                </NavLink>
            </div>

            <Outlet />
        </div>
    )
}

export default EmployerJob
