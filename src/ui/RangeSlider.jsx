import { useState } from 'react'

function RangeSlider() {
    const [value, setValue] = useState('1000000')
    return (
        <div className="relative mt-10">
            <input
                className="w-full cursor-pointer appearance-none rounded-lg bg-gray-400 bg-transparent accent-sky-500/30"
                type="range"
                min="1000000"
                max="50000000"
                step="1000000"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <span className="absolute -top-8 left-0 rounded px-2 text-stone-500">
                Ngân sách cao nhất: {value}đ
            </span>
        </div>
    )
}

export default RangeSlider
