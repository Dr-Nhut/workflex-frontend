import UserName from '../ui/UserName'
import StatOverview from '../ui/StatOverview'
import Rectangle from '../ui/Rectangle'
import CardContainer from '../ui/CardContainer'
import SidebarLayout from '../layouts/SidebarLayout'
import Partner from '../features/user/Partner'
import { useContext } from 'react'
import { UserContext } from '../features/user/userSlice'
import { Link } from 'react-router-dom'
import { getAllEvaluationByUser } from '../services/apiEvaluation'
import { useQueries } from '@tanstack/react-query'
import Spinner from '../ui/Spinner'
import {
    getEmployerCurrentJob,
    getFreelancerCurrentJob,
} from '../services/apiJob'
import { getOffersByFreelancer } from '../services/apiOffer'
import EmployerInformation from '../features/user/EmployerInformation'
import JobRecommendation from '../features/recommendation/JobRecommendation'
import DemandJob from '../features/jobs/DemandJob'
import FreelancerRecommendation from '../features/recommendation/FreelancerRecommendation'
import TextDescriptionEditor from '../ui/TextDescriptionEditor'

function FreelancerDashboard() {
    const { user } = useContext(UserContext)

    const [
        { isLoading: loadingEva, data: allEva },
        { isLoading: loadingFreelancerJobs, data: currentJobs },
        { isLoading: loadingFreelancerCompletedJobs, data: completedJobs },
        { isLoading: loadingOffers, data: offers },
        { isLoading: loadingEmployerJobs, data: employerJobs },
        // { isLoading: loadingEmployerCurrentJobs, data: currentJobs },
    ] = useQueries({
        queries: [
            {
                queryKey: ['evaluations', user.id],
                queryFn: () => getAllEvaluationByUser(user.id),
            },
            {
                queryKey: ['freelancer-current-job', user.id],
                queryFn: () =>
                    getFreelancerCurrentJob({
                        id: user.id,
                        status: 5,
                    }),
            },
            {
                queryKey: ['freelancer-completed-jobs', user.id],
                queryFn: () =>
                    getFreelancerCurrentJob({
                        id: user.id,
                        status: 6,
                        comparison: '>=',
                    }),
            },
            {
                queryKey: ['offersByFreelancer', user.id],
                queryFn: () => getOffersByFreelancer(user.id),
            },
            {
                queryKey: ['employerJobs', user.id],
                queryFn: () =>
                    getEmployerCurrentJob({
                        id: user.id,
                        status: 0,
                        comparison: '>=',
                    }),
            },
        ],
    })

    if (
        loadingEva ||
        loadingFreelancerJobs ||
        loadingOffers ||
        loadingFreelancerCompletedJobs ||
        loadingEmployerJobs
    )
        return <Spinner />

    return (
        <div className="min-h-[600px] bg-slate-200 pl-10 pt-4">
            <SidebarLayout
                right
                fullWidth
                mainWidth="col-span-6"
                sidebar={
                    <div className="col-span-6 mx-12">
                        {user.role === 'fre' ? (
                            <JobRecommendation />
                        ) : (
                            <FreelancerRecommendation />
                        )}
                        <Partner partner={allEva} />
                    </div>
                }
            >
                <UserName dark>Chào, {user.fullname}</UserName>

                {user.role === 'fre' && (
                    <div className="mt-2 flex justify-between">
                        <StatOverview
                            title="Đang thực hiện"
                            number={currentJobs.length}
                            className="bg-orange-500"
                        />

                        <StatOverview
                            title="Đang chào giá"
                            number={offers.length}
                            className="bg-blue-500"
                        />

                        <StatOverview
                            title="Đã hoàn thành"
                            number={completedJobs.length}
                            className="bg-green-500"
                        />
                    </div>
                )}

                {user.role === 'emp' && (
                    <div className="mt-2 flex justify-between">
                        <StatOverview
                            title="Công việc đã đăng"
                            number={employerJobs.length}
                            className="bg-orange-500"
                        />

                        <StatOverview
                            title="Đang chào giá"
                            number={
                                employerJobs.filter((job) => job.status === 3)
                                    .length
                            }
                            className="bg-blue-500"
                        />

                        <StatOverview
                            title="Đang thực hiện"
                            number={
                                employerJobs.filter((job) => job.status === 5)
                                    .length
                            }
                            className="bg-green-500"
                        />
                    </div>
                )}

                {(user.role === 'fre' ? currentJobs.length === 0 : employerJobs.filter(job => job.status === 5).length === 0) ? (
                    <DemandJob />
                ) : (
                    <section>
                        <header className="flex items-center justify-between py-4">
                            <h4 className="text-xl font-semibold capitalize text-stone-700">
                                Dự án đang thực hiện
                            </h4>
                            <Link
                                to={
                                    user.role === 'emp'
                                        ? '/employer-job/current'
                                        : '/freelancer-jobs/current'
                                }
                                className="rounded-xl bg-primary p-2 font-semibold text-stone-50 hover:bg-blue-600"
                            >
                                Xem tất cả
                            </Link>
                        </header>

                        {user.role === 'fre' ? currentJobs.slice(0, 3).map((currentJob) => (
                            <CardContainer
                                key={currentJob.id}
                                jobId={currentJob.id}
                            >
                                <Rectangle background="bg-teal-500">
                                    {currentJob.category}
                                </Rectangle>
                                <div className="my-2 flex items-center justify-between">
                                    <h2 className="font-semibold text-stone-900">
                                        {currentJob.name}
                                    </h2>
                                </div>
                                <EmployerInformation
                                    employerId={currentJob.employerId}
                                />
                            </CardContainer>
                        )) : employerJobs.filter(job => job.status === 5).map(job => (
                            <CardContainer
                                key={job.id}
                                jobId={job.id}
                            >
                                <Rectangle background="bg-teal-500">
                                    {job.category}
                                </Rectangle>
                                <div className="my-2 flex items-center justify-between">
                                    <h2 className="font-semibold text-stone-900">
                                        {job.name}
                                    </h2>
                                </div>
                                <TextDescriptionEditor lineClamp >{job.description}</TextDescriptionEditor>
                                {/* <EmployerInformation
                                    employerId={currentJob.employerId}
                                /> */}
                            </CardContainer>
                        ))}
                    </section>
                )}
            </SidebarLayout>
        </div>
    )
}

export default FreelancerDashboard
