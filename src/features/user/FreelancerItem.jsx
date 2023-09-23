import { UilMapMarker } from '@iconscout/react-unicons'

import Button from '../../common/buttons/Button'
import CardStats from './CardStats'
import Rectangle from '../../ui/Rectangle'
import UserCard from './UserCard'

function FreelancerItem({ freelancer }) {
    return (
        <li className="cursor-pointer border border-stone-300 px-8 py-4 hover:bg-stone-100">
            <div className="flex items-center justify-between ">
                <UserCard
                    fullName={freelancer.name}
                    avatarUrl={freelancer.avatar}
                >
                    <span className="flex p-px text-sm font-extralight italic">
                        <UilMapMarker size="18" className="text-red-500" />
                        {freelancer.address}
                    </span>
                </UserCard>
                {/* <UserLocation
                    fullName={freelancer.name}
                    avatarUrl={freelancer.avatar}
                    address={freelancer.address}
                /> */}
                <Button type="btn-primary" size="small" className="rounded-xl">
                    Liên hệ tôi
                </Button>
            </div>

            <div className="ml-16 mt-1">
                <CardStats
                    rating={freelancer.rating}
                    jobs={freelancer.numberJobs}
                    jobSuccess={freelancer.jobSuccess}
                    reviews={freelancer.numberReviews}
                />

                <div className="mt-3 flex gap-x-2">
                    {freelancer.categories.map((category) => (
                        <Rectangle key={category}>{category}</Rectangle>
                    ))}
                </div>

                <span className="my-2 line-clamp-4 text-justify text-stone-400">
                    {freelancer.bio}
                </span>
            </div>
        </li>
    )
}

export default FreelancerItem
