import { UisStar } from '@iconscout/react-unicons-solid'
import { UilStar } from '@iconscout/react-unicons'

function StarRatingStatic({ numStars }) {
    return (
        <div>
            {Array.apply(null, Array(numStars)).map((x, i) => {
                return (
                    <UisStar
                        size="24"
                        key={i}
                        className="inline-block text-yellow-400"
                    />
                )
            })}

            {Array.apply(null, Array(5 - numStars)).map((i, y) => {
                return (
                    <UilStar
                        key={y}
                        className="inline-block text-yellow-500"
                        size="24"
                    />
                )
            })}
        </div>
    )
}

export default StarRatingStatic
