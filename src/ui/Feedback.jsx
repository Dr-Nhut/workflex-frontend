import UserCard from '../features/user/UserCard'
import CardContainer from './CardContainer'
import DescriptionSection from './Section/DescriptionSection'
import StarRating from './StarRating'

function Feedback() {
    return (
        <CardContainer>
            <UserCard
                fullName="Saka"
                avatarUrl="https://i.pravatar.cc/150?u=a042581f4e29026awsl"
            >
                <div className="-mt-2 flex items-center gap-x-2">
                    <StarRating numStars={4} />
                    <span className="text-sm text-stone-400">3 tuần trước</span>
                </div>
            </UserCard>

            <DescriptionSection align="text-justify">
                Quickly helped my website problem efficiently!
            </DescriptionSection>
        </CardContainer>
    )
}

export default Feedback
