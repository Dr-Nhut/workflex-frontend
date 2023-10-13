import { Link } from 'react-router-dom'

function ListItem({ to, icon, children, onClick }) {
    if (!to) {
        return (
            <li onClick={onClick} className="flex p-2 hover:bg-stone-100 ">
                {icon}
                <span>{children}</span>
            </li>
        )
    }
    return (
        <Link
            to={to}
            className="flex cursor-pointer rounded p-2  capitalize no-underline hover:bg-stone-200" /*className="flex rounded p-2 hover:bg-stone-200"*/
        >
            <span>{icon}</span>
            <span>{children}</span>
        </Link>
    )
}

export default ListItem
