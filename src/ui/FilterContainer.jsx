import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons'
import { useState } from 'react'

function FilterContainer({ children, title }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <span
                onClick={() => setIsOpen((pre) => !pre)}
                className="my-4 flex cursor-pointer justify-between bg-stone-400/30 p-2 font-semibold text-gray-900"
            >
                {title}
                {isOpen ? <UilAngleUp /> : <UilAngleDown />}
            </span>
            {isOpen && children}
        </div>
    )
}

export default FilterContainer
