import { UisStar } from '@iconscout/react-unicons-solid'
function StarRatingSimple({ rating }) {
    return (
        <div className="flex items-center">
            <UisStar className="inline-block w-6 text-yellow-400" />
            <span className="pl-1 font-bold">{rating}/5</span>
        </div>
    )
}

export default StarRatingSimple
