import LinkItem from './LinkItem'

function Navbar() {
    return (
        <ul className="flex justify-around list-none">
            <li className="py-0 px-2">
                <LinkItem>Tìm việc làm</LinkItem>
            </li>
            <li className="py-0 px-2">
                <LinkItem>Tìm Freelancer</LinkItem>
            </li>
        </ul>
    )
}

export default Navbar
