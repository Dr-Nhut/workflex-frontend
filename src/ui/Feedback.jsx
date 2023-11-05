import { URL_SERVER_SIMPLE } from '../constants'
import UserCard from '../features/user/UserCard'
import formatFullTime from '../utils/formatFullTime'
import CardContainer from './CardContainer'
import DescriptionSection from './Section/DescriptionSection'
import StarRatingStatic from './StarRatingStatic'

function Feedback({ fullname, avatar, stars, comment, createAt }) {
    return (
        <CardContainer>
            <UserCard
                fullName={fullname}
                avatarUrl={`${URL_SERVER_SIMPLE}${avatar}`}
            >
                <div className="-mt-2 flex items-center gap-x-2">
                    <StarRatingStatic numStars={stars} />
                    <span className="text-sm text-stone-400">
                        {createAt ? formatFullTime(createAt) : '3 tuần trước'}
                    </span>
                </div>
            </UserCard>

            <DescriptionSection align="text-justify">
                {comment}
            </DescriptionSection>
        </CardContainer>
    )
}

export default Feedback
