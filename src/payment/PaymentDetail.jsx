import { Link } from 'react-router-dom'
import TitleSection from '../ui/TitleSection'
import TextDescriptionEditor from '../ui/TextDescriptionEditor'
import UserCard from '../features/user/UserCard'
import { URL_SERVER_SIMPLE } from '../constants'
import Button from '../common/buttons/Button'
import Rectangle from '../ui/Rectangle'
import formatCurrency from '../utils/formatCurrency'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateJob } from '../services/apiJob'
import toast from 'react-hot-toast'
import Spinner from '../ui/Spinner'

function PaymentDetail({ job, offer, payment }) {
    const queryClient = useQueryClient()
    const { isLoading, mutate } = useMutation({
        mutationFn: updateJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['jobDetail', job.id] })
            toast.success('Đã hoàn thành thanh toán cho freelancer')
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })

    if (isLoading) return <Spinner />

    return (
        <div className="mt-">
            <Link to="" className="mb-4 cursor-pointer text-primary">
                {job.category}
            </Link>

            <div className="flex items-center justify-between px-4">
                <TitleSection>{job.name}</TitleSection>

                <span className="font-semibold">
                    {formatCurrency(payment.total)}
                </span>
            </div>
            <TextDescriptionEditor>{job.description}</TextDescriptionEditor>

            <div className="flex items-center justify-between px-20">
                <div className="rounded bg-stone-100 p-4 shadow">
                    <h4 className="my-2 text-center text-xl font-semibold">
                        Nhà tuyển dụng
                    </h4>
                    <UserCard
                        fullName={job.fullname}
                        avatarUrl={`${URL_SERVER_SIMPLE}${job.avatar}`}
                    >
                        {job.email}
                    </UserCard>
                    <div className="ml-16 mt-4">
                        <Rectangle background="bg-teal-500">
                            Đã thanh toán
                        </Rectangle>
                    </div>
                </div>

                <div className="rounded bg-stone-100 p-4 shadow">
                    <h4 className="my-2 text-center text-xl font-semibold">
                        Freelancer
                    </h4>
                    <UserCard
                        fullName={offer.fullname}
                        avatarUrl={`${URL_SERVER_SIMPLE}${offer.avatar}`}
                    >
                        {offer.freelancerEmail}
                    </UserCard>

                    {job.status === 7 && (
                        <Button
                            className="mx-auto mt-4"
                            type="btn-primary rounded-xl"
                            onClick={() => {
                                mutate({
                                    id: job.id,
                                    payload: {
                                        status: 8,
                                    },
                                })
                            }}
                        >
                            Thanh toán
                        </Button>
                    )}
                    {job.status === 8 && (
                        <div className="ml-16 mt-4">
                            <Rectangle background="bg-teal-500">
                                Đã thanh toán
                            </Rectangle>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaymentDetail
