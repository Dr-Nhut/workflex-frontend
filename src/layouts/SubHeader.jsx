import { SUBNAV } from '../constants'
import Navbar from '../ui/NavBar/Navbar'

function SubHeader() {
    return (
        <div className="flex h-12 items-center bg-emerald-700 px-32">
            <Navbar items={SUBNAV} />
        </div>
    )
}

export default SubHeader
