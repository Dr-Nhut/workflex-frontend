import Account from '../ui/Account'
import UserMenu from '../features/user/UserMenu'
import Logo from '../ui/Logo'
import Navbar from '../ui/NavBar/Navbar'
import Search from '../features/Search'
import { DEFAULT_NAV } from '../constants'
import { useState } from 'react'
// import SubHeader from './SubHeader'

function Header() {
    const [user] = useState(true)
    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-sky-800">
            <div className="flex h-header w-full items-center justify-around">
                <Logo />
                <Search />
                {!user && <Navbar items={DEFAULT_NAV} />}
                {user ? <UserMenu /> : <Account />}
            </div>

            {/* {user && <SubHeader />} */}
        </header>
    )
}

export default Header
