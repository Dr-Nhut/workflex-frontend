import Account from '../Account/Acount'
import Logo from './Logo'
import Navbar from './NavBar/Navbar'
import Search from '../Search/Search'

function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-sky-800">
            <div className="w-full h-header flex justify-around items-center">
                <Logo />
                <Search />
                <Navbar />
                <Account />
            </div>
        </div>
    )
}

export default Header
