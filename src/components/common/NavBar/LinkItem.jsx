import { Link } from 'react-router-dom'

function LinkItem({ children, to }) {
    return (
        <Link
            to={to}
            className="inline-block bg-transparent no-underline text-xl text-brand_stone hover:text-primary capitalize font-semibold leading-[81px] cursor-pointer"
        >
            {children}
        </Link>
    )
}

export default LinkItem
