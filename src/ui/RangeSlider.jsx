import { useSearchParams } from 'react-router-dom'
import formatCurrency from '../utils/formatCurrency'
import { useState } from 'react'

function RangeSlider() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState('50000000')

    const handleOnMouseUp = (e) => {
        searchParams.delete('budget')
        const query = searchParams.toString()
        setSearchParams(
            query
                ? `${query}&budget=${e.target.value}`
                : `budget=${e.target.value}`
        )
    }

    return (
        <div className="relative mt-10">
            <input
                className="w-full cursor-pointer appearance-none rounded-lg bg-gray-300 accent-sky-500/30"
                type="range"
                min="1000000"
                max="50000000"
                step="1000000"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onMouseUp={handleOnMouseUp}
            />
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 text-stone-500">
                {formatCurrency(+value)}
            </span>
        </div>
    )
}

export default RangeSlider
