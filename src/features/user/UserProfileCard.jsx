import Avatar from '../../ui/Avatar'
import UserName from '../../ui/UserName'
import StarRatingSimple from '../../ui/StarRatingSimple'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import WorkSkill from '../../ui/WorkSkill'
import { useQueries } from '@tanstack/react-query'
import { getInfor } from '../../services/apiUser'
import Spinner from '../../ui/Spinner'
import { URL_SERVER_SIMPLE } from '../../constants'
import { getAllEvaluationByUser } from '../../services/apiEvaluation'
import OfferAcceptanceRate from '../offers/OfferAcceptanceRate'
import { getAllOffersByFreelancer } from '../../services/apiOffer'
import JobCompletionRate from '../jobs/JobCompletionRate'
import RehiredRate from '../jobs/RehiredRate'
import averageStar from '../../utils/avarageStar'
import { getFreelancerCurrentJob } from '../../services/apiJob'
import { Link } from 'react-router-dom'
import { UserContext } from './userSlice'
import { useContext } from 'react'
import Button from '../../common/buttons/Button'
import { PortalWithState } from 'react-portal'
import UserCard from './UserCard'
import { UilMultiply } from '@iconscout/react-unicons'
import MessageMainContainer from '../../ui/MessageMainContainer'
import SendMainMessage from '../jobs/SendMainMessage'


function UserProfileCard({ userId }) {
    const {user : me} = useContext(UserContext)
    const [
        { isLoading: loadingUser, data: user },
        { isLoading: loadingEvaluation, data: evaluations },
        { isLoading: loadingAllOffers, data: allOffersOfFreelancers },
        { isLoading: loadingAllCurrentJob, data: allCurrentJobsFreelancer },
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
            {
                queryKey: ['allCurrentJobsOfFreelancer', userId],
                queryFn: () =>
                    getFreelancerCurrentJob({ id: userId, status: 5 }),
            },
        ],
    })

    if (
        loadingUser ||
        loadingEvaluation ||
        loadingAllOffers ||
        loadingAllCurrentJob
    )
        return <Spinner />

    return (
        <div className="col-span-3">
            <section className="flex flex-col items-center gap-y-2 border border-stone-300 py-6">
                <Avatar
                    image={`${URL_SERVER_SIMPLE}${user.avatar}`}
                    type="largeImage"
                />
                {userId === me.id ? <>
                    <UserName dark>{user.fullname}</UserName>
                    <DescriptionSection>{user.email}</DescriptionSection>
                </>: <Link to={`/profile/${userId}`} className='flex flex-col items-center'>
                    <UserName dark>{user.fullname}</UserName>
                    <DescriptionSection>{user.email}</DescriptionSection>
                </Link>}
                {user.role === 'fre' && (
                    <span className="cursor-pointer font-semibold text-red-500/80">
                        {`${allCurrentJobsFreelancer.length} đang thực hiện`}
                    </span>
                )}
                <div className="flex w-4/5 justify-around">
                    <StarRatingSimple rating={averageStar(evaluations)} />
                    {user.role === 'fre' && (
                        <span className="cursor-pointer font-semibold text-sky-500/60">
                            {`${
                                allOffersOfFreelancers.filter(
                                    (item) => item.status === 'Đang duyệt'
                                ).length
                            } đang chào giá`}
                        </span>
                    )}
                </div>

                {userId !== me.id && <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <>
                        <Button type="btn-primary rounded" size="small" onClick={openPortal}>
                            Liên hệ
                        </Button>
                        {portal(
                            <div className="animate__animated animate__fadeInRight fixed right-0 top-20 z-50 h-full w-[480px] rounded-lg bg-stone-50 p-4 shadow-lg">
                                <div className="flex items-center justify-between border-b border-stone-400 pb-2 font-semibold text-stone-800">
                                    <UserCard
                                        fullName={user.fullname}
                                        avatarUrl={`${URL_SERVER_SIMPLE}${user.avatar}`}
                                    />
                                    <UilMultiply
                                        className="cursor-pointer hover:text-stone-500"
                                        onClick={closePortal}
                                    />
                                </div>

                                <div className="p-4">
                                    <MessageMainContainer
                                        partner={{id: userId}}
                                    />
                                </div>

                                <SendMainMessage
                                    partner={{id: userId}}
                                />
                            </div>
                        )}
                    </>
                )}
            </PortalWithState>}

                {/* {userId !== me.id && <Button type="btn-primary rounded" size="small">
                    Liên hệ
                </Button>} */}
            </section>
            {user.role === 'fre' && (
                <section className="border border-stone-300 px-2 py-4">
                    <div className="flex items-center gap-x-2">
                        <JobCompletionRate userId={userId} />
                    </div>

                    <div className="flex items-center gap-x-2">
                        <OfferAcceptanceRate userId={userId} />
                    </div>

                    <div className="flex items-center gap-x-2">
                        <RehiredRate userId={userId} />
                    </div>
                </section>
            )}
            <section className="border border-stone-300 px-2 py-4">
                <WorkSkill userId={userId} role={user.role} />
            </section>
        </div>
    )
}

export default UserProfileCard
