import Avatar from '../../ui/Avatar'
import UserName from '../../ui/UserName'
import StarRatingSimple from '../../ui/StarRatingSimple'
import Progress from '../../ui/Progress'
import {
    UilEnvelopeCheck,
    UilThumbsUp,
    UilBriefcase,
} from '@iconscout/react-unicons'
import Label from '../../ui/Label'
import Contact from '../../ui/Contact'

function UserProfileCard() {
    return (
        <div>
            <section className="flex flex-col items-center gap-y-2 border border-stone-300 py-6">
                <Avatar
                    image="https://i.pravatar.cc/150?u=a042581f4e29026awsl"
                    type="largeImage"
                />
                <UserName dark>John</UserName>
                <div className="flex w-3/5 justify-around">
                    <StarRatingSimple rating={4.6} />
                    <span className="cursor-pointer font-semibold text-sky-500/80 hover:text-sky-500">
                        201 đánh giá
                    </span>
                </div>
            </section>
            <section className="border border-stone-300 px-2 py-4">
                <div className="flex items-center gap-x-4">
                    <Progress percent={97} content="Tỉ lệ dự án hoàn thành" />
                    <Label>
                        <UilBriefcase />
                        64 dự án
                    </Label>
                </div>

                <div className="flex items-center gap-x-4">
                    <Progress
                        percent={82}
                        content="Tỉ lệ được chấp nhận chào giá"
                    />
                    <Label>
                        <UilEnvelopeCheck />
                        Chào giá
                    </Label>
                </div>

                <div className="flex items-center gap-x-4">
                    <Progress percent={21} content="Tỉ lệ được thuê lại" />
                    <Label>
                        <UilThumbsUp />
                        Thuê lại
                    </Label>
                </div>
            </section>
            <section className="border border-stone-300 px-2 py-4">
                <Contact />
            </section>
        </div>
    )
}

export default UserProfileCard
