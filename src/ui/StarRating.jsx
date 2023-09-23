import { UisStar } from '@iconscout/react-unicons-solid'
import { UilStar } from '@iconscout/react-unicons'

function StarRating({ numStars = 1 }) {
    return (
        <div>
            {Array.apply(null, Array(numStars)).map((x, i) => {
                return (
                    <UisStar
                        size="16"
                        key={i}
                        className="inline-block text-yellow-400"
                    />
                )
            })}

            {Array.apply(null, Array(5 - numStars)).map((i, y) => {
                return (
                    <UilStar
                        key={i}
                        className="inline-block text-yellow-500"
                        size="16"
                    />
                )
            })}
        </div>
    )
}

export default StarRating
