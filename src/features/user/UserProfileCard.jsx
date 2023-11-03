import Avatar from '../../ui/Avatar'
import UserName from '../../ui/UserName'
import StarRatingSimple from '../../ui/StarRatingSimple'
import Progress from '../../ui/Progress'
import { UilThumbsUp, UilBriefcase } from '@iconscout/react-unicons'
import Label from '../../ui/Label'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import WorkSkill from '../../ui/WorkSkill'
import { useQueries } from '@tanstack/react-query'
import { getInfor } from '../../services/apiUser'
import Spinner from '../../ui/Spinner'
import { URL_SERVER_SIMPLE } from '../../constants'
import { getAllEvaluationByUser } from '../../services/apiEvaluation'
import OfferAcceptanceRate from '../offers/OfferAcceptanceRate'
import { getAllOffersByFreelancer } from '../../services/apiOffer'

function UserProfileCard({ userId }) {
    const [
        { isLoading: loadingUser, data: user },
        { isLoading: loadingEvaluation, data: evaluations },
        { isLoading: loadingAllOffers, data: allOffersOfFreelancers },
    ] = useQueries({
        queries: [
            {
                queryKey: ['user', userId],
                queryFn: () => getInfor(userId),
            },
            {
                queryKey: ['evaluations', userId],
                queryFn: () => getAllEvaluationByUser(userId),
            },
            {
                queryKey: ['allOffersOfFreelancer', userId],
                queryFn: () => getAllOffersByFreelancer(userId),
            },
        ],
    })

    const averageStar = (evaluations) => {
        if (evaluations.length === 0) return 0
        return (
            evaluations.reduce(
                (accumulator, currentValue) => accumulator + currentValue.stars,
                0
            ) / evaluations.length
        )
    }

    if (loadingUser || loadingEvaluation || loadingAllOffers) return <Spinner />

    return (
        <div className="col-span-3">
            <section className="flex flex-col items-center gap-y-2 border border-stone-300 py-6">
                <Avatar
                    image={`${URL_SERVER_SIMPLE}${user.avatar}`}
                    type="largeImage"
                />
                <UserName dark>{user.fullname}</UserName>
                <DescriptionSection>{user.email}</DescriptionSection>
                <div className="flex w-4/5 justify-around">
                    <StarRatingSimple rating={averageStar(evaluations)} />
                    <span className="cursor-pointer font-semibold text-sky-500/80">
                        {`${
                            allOffersOfFreelancers.filter(
                                (item) => item.status === 'Đang duyệt'
                            ).length
                        } đang chào giá`}
                    </span>
                </div>
            </section>
            <section className="border border-stone-300 px-2 py-4">
                <div className="flex items-center gap-x-2">
                    <Progress percent={97} content="Tỉ lệ dự án hoàn thành" />
                    <Label>
                        <UilBriefcase />
                        64 việc
                    </Label>
                </div>

                <div className="flex items-center gap-x-2">
                    <OfferAcceptanceRate userId={userId} />
                </div>

                <div className="flex items-center gap-x-2">
                    <Progress percent={21} content="Tỉ lệ được thuê lại" />
                    <Label>
                        <UilThumbsUp />
                        Thuê lại
                    </Label>
                </div>
            </section>
            <section className="border border-stone-300 px-2 py-4">
                <WorkSkill userId={userId} />
            </section>
        </div>
    )
}

export default UserProfileCard
