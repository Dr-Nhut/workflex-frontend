import Button from '../../common/buttons/Button'
import CardContainer from '../../ui/CardContainer'
import Rectangle from '../../ui/Rectangle'
import StarRating from '../../ui/StarRating'
import UserCard from './UserCard'

function Partner() {
    return (
        <section className="col-span-6 mx-12">
            <header className="mb-4 flex items-center justify-between">
                <h4 className="text-xl font-semibold capitalize text-stone-700">
                    Hợp tác gần đây
                </h4>
                <Button type="btn-primary" size="small" className="rounded-xl">
                    Xem tất cả
                </Button>
            </header>

            <CardContainer row>
                <UserCard fullName="John" avatarUrl="https://i.pravatar.cc/300">
                    <span>john@gmail.com</span>
                </UserCard>

                <Rectangle background="bg-green-500">Hoàn thành</Rectangle>

                <StarRating numStars={5} />

                <span className="p-2 font-semibold">4000000đ</span>
            </CardContainer>

            <CardContainer row>
                <UserCard fullName="John" avatarUrl="https://i.pravatar.cc/300">
                    <span>john@gmail.com</span>
                </UserCard>

                <Rectangle background="bg-green-500">Hoàn thành</Rectangle>

                <StarRating numStars={5} />

                <span className="p-2 font-semibold">4000000đ</span>
            </CardContainer>

            <CardContainer row>
                <UserCard fullName="John" avatarUrl="https://i.pravatar.cc/300">
                    <span>john@gmail.com</span>
                </UserCard>

                <Rectangle background="bg-green-500">Hoàn thành</Rectangle>

                <StarRating numStars={5} />

                <span className="p-2 font-semibold">4000000đ</span>
            </CardContainer>
        </section>
    )
}

export default Partner
