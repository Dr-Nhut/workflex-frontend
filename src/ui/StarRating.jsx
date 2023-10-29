import { UisStar } from '@iconscout/react-unicons-solid'
import { UilStar } from '@iconscout/react-unicons'
import { useState } from 'react'

function StarRating({ value = 1, onChange }) {
    const [numStar, setNumStar] = useState(value)

    return (
        <div>
            {Array.apply(null, Array(numStar)).map((x, i) => {
                return (
                    <UisStar
                        size="24"
                        key={i}
                        className="inline-block text-yellow-400"
                        onMouseOver={() => setNumStar(i + 1)}
                        onMouseOut={() => setNumStar(value)}
                        onClick={() => onChange(i + 1)}
                    />
                )
            })}

            {Array.apply(null, Array(5 - numStar)).map((i, y) => {
                return (
                    <UilStar
                        key={y}
                        className="inline-block text-yellow-500"
                        size="24"
                        onMouseOver={() => setNumStar(y + numStar + 1)}
                        onMouseOut={() => setNumStar(value)}
                        onClick={() => onChange((pre) => pre + y + 1)}
                    />
                )
            })}
        </div>
    )
}

export default StarRating
