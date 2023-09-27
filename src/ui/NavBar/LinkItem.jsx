import { NavLink } from 'react-router-dom'

function LinkItem({ children, to }) {
    return (
        <NavLink
            to={to}
            className={(navData) =>
                `inline-block cursor-pointer bg-transparent font-semibold capitalize  text-brand_stone no-underline hover:text-primary ${
                    navData.isActive ? 'text-sky-600/70' : ''
                }`
            }
            // className={` inline-block cursor-pointer bg-transparent text-xl font-semibold capitalize leading-[81px] text-brand_stone no-underline hover:text-primary ${classnameActive}`}
        >
            {children}
        </NavLink>
    )
}

export default LinkItem
