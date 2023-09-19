import LinkItem from './LinkItem'

function Navbar() {
    return (
        <ul className="flex list-none justify-around">
            <li className="px-2 py-0">
                <LinkItem to="/jobs">Tìm việc làm</LinkItem>
            </li>
            <li className="px-2 py-0">
                <LinkItem to="/freelancers">Tìm Freelancer</LinkItem>
            </li>
        </ul>
    )
}

export default Navbar
