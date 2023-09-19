import Button from '../common/buttons/Button'
import { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'

function Search() {
    const [category, setCategory] = useState(true)
    return (
        <div className="relative w-96 text-stone-700">
            <input
                className="h-10 w-full rounded-3xl border-0 bg-stone-300 py-2.5 pl-12 pr-5 placeholder:text-stone-700 focus:bg-stone-100 focus:outline-none"
                type="text"
                placeholder="Tìm kiếm"
            />
            <Button
                type="btn-text"
                size="small"
                className="absolute left-2 top-0 rounded-r-full"
            >
                <UilSearch size="24" />
            </Button>
            <Button
                type="btn-primary"
                size="small"
                className="absolute right-0 top-0 w-24 rounded-r-3xl py-2"
                onClick={() => setCategory((pre) => !pre)}
            >
                {category ? 'Việc làm' : 'Freelancer'}
            </Button>
        </div>
    )
}

export default Search
