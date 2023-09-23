import StarRatingSimple from '../../ui/StarRatingSimple'
import {
    UilCommentAltLines,
    UilBriefcaseAlt,
    UilAward,
} from '@iconscout/react-unicons'
function CardStats({ rating, jobs, jobSuccess, reviews }) {
    return (
        <div className="flex gap-x-2">
            <StarRatingSimple rating={rating} />
            <span className="flex cursor-context-menu gap-x-2 border-l border-stone-500 pl-2 hover:text-stone-500">
                <UilBriefcaseAlt className="inline-block" />
                <em>{jobs} dự án</em>
            </span>
            <span className="flex cursor-context-menu gap-x-2 border-l border-stone-500 pl-2 hover:text-stone-500">
                <UilAward className="inline-block " />
                <em>{jobSuccess} hoàn thành</em>
            </span>
            <span className="flex cursor-pointer gap-x-2 border-l border-stone-500 pl-2 hover:text-sky-500">
                <UilCommentAltLines className="inline-block" />
                {reviews} đánh giá
            </span>
        </div>
    )
}

export default CardStats
