import { Link } from 'react-router-dom'

function ListItem({ to, icon, children }) {
    if (!to) {
        return (
            <li className="flex p-2 hover:bg-stone-300 ">
                {icon}
                <span>{children}</span>
            </li>
        )
    }
    return (
        <Link to={to} className="flex p-2 hover:bg-stone-300 ">
            {icon}
            <span>{children}</span>
        </Link>
    )
}

export default ListItem
