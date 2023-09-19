import Account from '../ui/Account'
import Logo from '../ui/Logo'
import Navbar from '../ui/NavBar/Navbar'
import Search from '../features/Search'

function Header() {
    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-sky-800">
            <div className="flex h-header w-full items-center justify-around">
                <Logo />
                <Search />
                <Navbar />
                <Account />
            </div>
        </header>
    )
}

export default Header
