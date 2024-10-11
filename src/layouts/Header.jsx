import Account from '../ui/Account'
import UserMenu from '../features/user/UserMenu'
import Logo from '../ui/Logo'
import Navbar from '../ui/NavBar/Navbar'
// import Search from '../features/Search'
import { DEFAULT_NAV } from '../constants'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'
// import SubHeader from './SubHeader'

function Header() {
    const { user } = useContext(UserContext)

    return (
        <header className="fixed left-0 right-0 top-0 z-50 bg-sky-800">
            <div
                className={`flex h-header w-full items-center ${
                    user?.role === 'adm'
                        ? 'justify-between px-10'
                        : 'justify-around'
                }`}
            >
                <Logo />
                {/* {user?.role !== 'adm' && <Search />} */}
                {!user.id && <Navbar items={DEFAULT_NAV} />}
                {user.id ? <UserMenu role={user.role} /> : <Account />}
            </div>

            {/* {user && <SubHeader />} */}
        </header>
    )
}

export default Header
