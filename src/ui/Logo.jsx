import { Link } from 'react-router-dom'

function Logo() {
    return (
        <Link to="/">
            <img className="h-36" src="/logo-header.png" alt="logo" />
        </Link>
    )
}

export default Logo
