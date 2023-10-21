import Button from '../../common/buttons/Button'
import {
    UilBookmark,
    UilClockThree,
    UilFavorite,
} from '@iconscout/react-unicons'
import Rectangle from '../../ui/Rectangle'
import UserCard from '../user/UserCard'
import formatCurrency from '../../utils/formatCurrency'
import { URL_SERVER_SIMPLE } from '../../constants'
import formatTime from '../../utils/formatTime'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function JobItem({ job }) {
    const { user } = useContext(UserContext)
    return (
        <li className="relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 bg-slate-50 px-8 py-5 transition-all ease-in-out hover:-translate-y-2">
            <span className=" text-stone-400">
                <UilClockThree className="mr-2 inline-block" />
                {formatTime(job.createAt)}
            </span>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="mt-2 text-xl font-bold text-stone-900">
                        {job.name}
                    </h2>

                    <span className="mt-4 text-base font-semibold text-stone-700">
                        {job.type} | {formatCurrency(job.maxBudget)} |{' '}
                        {job.experience}
                    </span>
                </div>

                <div className="flex justify-between text-stone-500">
                    <Button type="btn-text">
                        <UilFavorite />
                    </Button>

                    <Button type="btn-primary" className="rounded-xl">
                        <Link
                            to={
                                user.id
                                    ? `/freelancer-bids/${job.id}`
                                    : '/login'
                            }
                        >
                            Xem chi tiết
                        </Link>
                    </Button>
                </div>
            </div>

            <TextDescriptionEditor>{job.description}</TextDescriptionEditor>

            <div className="my-2 flex items-center gap-4">
                <Rectangle primary>
                    <UilBookmark className="mr-2 inline-block" />
                    {job.category}
                </Rectangle>
                {/* {job.skills.map((skill) => (
                    <Rectangle key={skill}>{skill}</Rectangle>
                ))} */}
            </div>

            <div className="flex items-center justify-between rounded-lg  px-2">
                <UserCard
                    fullName={job.fullname}
                    avatarUrl={`${URL_SERVER_SIMPLE}${job.avatar}`}
                >
                    <p>{job.email}</p>
                </UserCard>

                <span className="font-semibold text-sky-600">
                    {job.numberBid || 0} chào giá
                </span>
            </div>
        </li>
    )
}

export default JobItem
