import { NavLink } from 'react-router-dom'

function ListItem({ to, icon, children }) {
    if (!to) {
        return (
            <li className="flex p-2 hover:bg-stone-100 ">
                {icon}
                <span>{children}</span>
            </li>
        )
    }
    return (
        <NavLink
            to={to}
            className={(navData) =>
                `flex cursor-pointer rounded p-2 capitalize  no-underline hover:bg-stone-200 ${
                    navData.isActive
                        ? 'bg-stone-200 font-semibold text-primary'
                        : 'text-stone-700'
                }`
            } /*className="flex rounded p-2 hover:bg-stone-200"*/
        >
            <span>{icon}</span>
            <span>{children}</span>
        </NavLink>
    )
}

export default ListItem
