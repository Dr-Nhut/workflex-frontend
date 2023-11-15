import Button from '../../common/buttons/Button'
import {
    UilBookmark,
    UilClockThree,
    UilFavorite,
} from '@iconscout/react-unicons'
import { UisFavorite } from '@iconscout/react-unicons-solid'
import Rectangle from '../../ui/Rectangle'
import UserCard from '../user/UserCard'
import formatCurrency from '../../utils/formatCurrency'
import { URL_SERVER_SIMPLE } from '../../constants'
import formatTime from '../../utils/formatTime'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../user/userSlice'
import Tippy from '@tippyjs/react'
import { useQuery } from '@tanstack/react-query'
import { getOffersForJob } from '../../services/apiOffer'

function JobItem({ job }) {
    const { user } = useContext(UserContext)
    const [isFav, setIsFav] = useState(false)

    const { isLoading, data: offers } = useQuery({
        queryKey: ['offers', job.id],
        queryFn: () => getOffersForJob(job.id),
    })

    const handleFavorite = (jobId) => {
        const currentFavourite = JSON.parse(localStorage.getItem(user.id)) || []
        if (currentFavourite.includes(job.id)) {
            localStorage.setItem(
                user.id,
                JSON.stringify(currentFavourite.filter((id) => id !== jobId))
            )
            setIsFav(false)
        } else {
            localStorage.setItem(
                user.id,
                JSON.stringify([...currentFavourite, jobId])
            )
            setIsFav(true)
        }
    }

    useEffect(() => {
        const currentFavourite = JSON.parse(localStorage.getItem(user.id)) || []
        if (currentFavourite.includes(job.id)) {
            setIsFav(true)
        } else setIsFav(false)
    }, [job.id, user.id])

    return (
        <li className="relative w-full cursor-pointer overflow-hidden rounded-xl border border-gray-300 bg-slate-50 px-8 py-5 transition-all ease-in-out hover:-translate-y-2">
            <Tippy content="Hạn chào giá">
                <span className="text-stone-500">
                    <UilClockThree className="mr-2 inline-block" />
                    {formatTime(job.bidDeadline)}
                </span>
            </Tippy>

            <div className="flex items-center justify-between">
                <div>
                    <h2 className="mt-2 max-w-[600px] text-xl font-bold text-stone-900">
                        {job.name}
                    </h2>

                    <span className="mt-4 text-base font-semibold text-stone-700">
                        {job.type} | {formatCurrency(job.maxBudget)} |{' '}
                        {job.experience}
                    </span>
                </div>

                <div className="flex justify-between text-stone-500">
                    <Button
                        type="btn-text"
                        onClick={() => handleFavorite(job.id)}
                    >
                        {isFav ? (
                            <UisFavorite className="text-teal-500" />
                        ) : (
                            <UilFavorite className="text-stone-500" />
                        )}
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

            <TextDescriptionEditor lineClamp>
                {job.description}
            </TextDescriptionEditor>

            <div className="my-2 flex items-center gap-4">
                <Rectangle primary>
                    <UilBookmark className="mr-2 inline-block" />
                    {job.category}
                </Rectangle>
            </div>

            <div className="flex items-center justify-between rounded-lg  px-2">
                <Link to={`/profile/${job.employerId}`}>
                    <UserCard
                        fullName={job.fullname}
                        avatarUrl={`${URL_SERVER_SIMPLE}${job.avatar}`}
                    >
                        <p>{job.email}</p>
                    </UserCard>
                </Link>

                <span className="font-semibold text-sky-600">
                    {isLoading ? '' : offers.length} chào giá
                </span>
            </div>
        </li>
    )
}

export default JobItem
