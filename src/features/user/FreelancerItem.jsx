import { UilMapMarker } from '@iconscout/react-unicons'

import Button from '../../common/buttons/Button'
import CardStats from './CardStats'
import Rectangle from '../../ui/Rectangle'
import UserCard from './UserCard'
import { useQueries } from '@tanstack/react-query'
import { getFreelancerInfor } from '../../services/apiUser'
import { URL_SERVER_SIMPLE } from '../../constants'
import { getCategoryByUser } from '../../services/apiCategory'
import { getAllEvaluationByUser } from '../../services/apiEvaluation'
import averageStar from '../../utils/avarageStar'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'

function FreelancerItem({ freelancerId }) {
    const [
        { isLoading: loadingCategory, data: categories },
        { isLoading, data: freelancer },
        { isLoading: loadingEvaluation, data: evaluations },
    ] = useQueries({
        queries: [
            {
                queryKey: ['categories', freelancerId],
                queryFn: () => getCategoryByUser(freelancerId),
            },
            {
                queryKey: ['freelancerInfor', freelancerId],
                queryFn: () => getFreelancerInfor(freelancerId),
            },
            {
                queryKey: ['evaluations', freelancerId],
                queryFn: () => getAllEvaluationByUser(freelancerId),
            },
        ],
    })

    if (isLoading || loadingCategory || loadingEvaluation) return null

    return (
        <li className="cursor-pointer border border-stone-300 px-8 py-4 hover:bg-stone-100">
            <div className="flex items-center justify-between ">
                <UserCard
                    fullName={freelancer.fullname}
                    avatarUrl={`${URL_SERVER_SIMPLE}${freelancer.avatar}`}
                >
                    <span className="flex p-px text-sm font-extralight italic">
                        <UilMapMarker size="18" className="text-red-500" />
                        {freelancer.address}
                    </span>
                </UserCard>
                <Button type="btn-primary" size="small" className="rounded-xl">
                    Liên hệ tôi
                </Button>
            </div>

            <div className="ml-16 mt-1">
                <CardStats
                    rating={averageStar(evaluations)}
                    freelancerId={freelancerId}
                    reviews={evaluations.length}
                />

                <div className="mt-3 flex gap-x-2">
                    {categories.map((category) => (
                        <Rectangle key={category.categoryId}>
                            {category.name}
                        </Rectangle>
                    ))}
                </div>

                <span className="my-2 text-justify text-stone-400">
                    <TextDescriptionEditor lineClamp>
                        {freelancer.bio}
                    </TextDescriptionEditor>
                </span>
            </div>
        </li>
    )
}

export default FreelancerItem
