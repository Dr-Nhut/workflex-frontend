import { useContext, useState } from 'react'
import Label from '../../common/Label'
import JobItemGrid from '../../ui/JobItemGrid'
import UserCard from '../user/UserCard'
import {
    UilAngleDown,
    UilUsdCircle,
    UilClockThree,
    UilAngleUp,
    UilCrosshairs,
    UilCheckCircle,
} from '@iconscout/react-unicons'
import Button from '../../common/buttons/Button'
import TitleSection from '../../ui/TitleSection'
import SidebarLayout from '../../layouts/SidebarLayout'
import UserProfileCard from '../user/UserProfileCard'
import { URL_SERVER_SIMPLE } from '../../constants'
import formatCurrency from '../../utils/formatCurrency'
import formatTime from '../../utils/formatTime'
import formatFullTime from '../../utils/formatFullTime'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'
import { useMutation } from '@tanstack/react-query'
import { UserContext } from '../user/userSlice'
import { createContract } from '../../services/apiContact'
import { updateJob } from '../../services/apiJob'
import { updateOffer } from '../../services/apiOffer'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { createNotification } from '../../services/apiNotification'

function OfferItemCard({ offers, offer, dateStart, jobName }) {
    const [isShowDetail, setIsShowDetail] = useState(false)
    const { user, socket } = useContext(UserContext)
    const jobId = useParams().id
    const navigate = useNavigate()

    const { mutateAsync: createContact } = useMutation({
        mutationFn: createContract,
    })

    const { mutateAsync: changeStatusJob } = useMutation({
        mutationFn: updateJob,
    })

    const { mutate: mutateCreateNotification } = useMutation({
        mutationFn: createNotification,
        onError: (err) => {
            toast.error(err.message)
        },
    })

    const { mutate: handleOffer } = useMutation({
        mutationFn: updateOffer,
    })

    async function handleOnClick() {
        try {
            await createContact({
                employerId: user.id,
                offerId: offer.id,
            })

            await changeStatusJob({
                id: jobId,
                payload: { status: 5 },
            })

            await offers.forEach((offerOrigin) => {
                handleOffer({
                    id: offerOrigin.id,
                    payload: {
                        status:
                            offer.id === offerOrigin.id
                                ? 'Đang thực hiện'
                                : 'Từ chối',
                        dateEnd: offerOrigin.dateEnd,
                        jobId,
                    },
                })

                socket.emit('sendFromFreelancerToEmployer', {
                    senderId: user.id,
                    receiverId: offerOrigin.freelancerId,
                    description: jobName,
                    type: offer.id === offerOrigin.id ? 5 : 6,
                })
                mutateCreateNotification({
                    senderId: user.id,
                    receiverId: offerOrigin.freelancerId,
                    description: jobName,
                    type: offer.id === offerOrigin.id ? 5 : 6,
                })
            })

            toast.success('Bạn đã chọn freelancer cho công việc')
            navigate('/employer-job/current')
        } catch (err) {
            toast.error(err.message)
        }
    }
    const {
        fullname,
        avatar,
        email,
        price,
        dateEnd,
        createAt,
        freelancerId,
        description,
        plan,
    } = offer

    return (
        <div
            className={`mb-4 rounded-lg border border-stone-300 bg-stone-100 p-2 ${
                isShowDetail ? '' : 'hover:bg-stone-200'
            }`}
        >
            <div
                onClick={() => setIsShowDetail((pre) => !pre)}
                className={`flex items-center gap-x-2 ${
                    isShowDetail ? 'hidden' : ''
                }`}
            >
                <div className="w-80">
                    <UserCard
                        fullName={fullname}
                        avatarUrl={`${URL_SERVER_SIMPLE}${avatar}`}
                    >
                        {email}
                    </UserCard>
                </div>

                <JobItemGrid
                    iconElement={<UilUsdCircle size="24" />}
                    title="Chi phí"
                    description={formatCurrency(price)}
                />

                <JobItemGrid
                    iconElement={<UilCheckCircle size="24" />}
                    title="Dự kiến hoàn thành"
                    description={formatTime(dateEnd)}
                />

                <JobItemGrid
                    iconElement={<UilCrosshairs size="24" />}
                    title="Tổng thời gian"
                    description={`${
                        (new Date(dateEnd) - new Date(dateStart)) / 86400000
                    } ngày`}
                />

                <JobItemGrid
                    iconElement={<UilClockThree size="24" />}
                    title="Đã gửi"
                    description={formatFullTime(createAt)}
                />

                <UilAngleDown />
            </div>

            <div className={`mt-4 ${isShowDetail ? '' : 'hidden'}`}>
                <div
                    onClick={() => setIsShowDetail((pre) => !pre)}
                    className="flex cursor-pointer items-center justify-between"
                >
                    <TitleSection>Chi tiết chào giá</TitleSection>
                    <UilAngleUp />
                </div>

                <SidebarLayout
                    fullWidth
                    sidebar={<UserProfileCard userId={freelancerId} />}
                >
                    <div className="ml-8">
                        <Label>Tự giới thiệu từ Freelancer</Label>
                        <TextDescriptionEditor align="text-left">
                            {description}
                        </TextDescriptionEditor>
                        <Label>Kế hoạch thực hiện</Label>
                        <TextDescriptionEditor align="text-left">
                            {plan}
                        </TextDescriptionEditor>
                        <Button
                            type="btn-primary"
                            className="mx-auto mt-8 rounded-xl"
                            onClick={handleOnClick}
                        >
                            Chấp nhận
                        </Button>
                    </div>
                </SidebarLayout>
            </div>
        </div>
    )
}

export default OfferItemCard
