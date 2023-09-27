import LinkItem from './LinkItem'

function Navbar({ items }) {
    return (
        <ul className="flex list-none justify-around">
            {items.map((item) => (
                <li key={item.to} className="px-2 py-0">
                    <LinkItem to={item.to}>{item.title}</LinkItem>
                </li>
            ))}
            {/* <li className="px-2 py-0">
                <LinkItem to="/findwork">Tìm việc làm</LinkItem>
            </li>
            <li className="px-2 py-0">
                <LinkItem to="/freelancers">Tìm Freelancer</LinkItem>
            </li> */}
        </ul>
    )
}

export default Navbar
