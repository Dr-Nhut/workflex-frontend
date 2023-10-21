import { useState } from 'react'
import Label from '../../common/Label'
import JobItemGrid from '../../ui/JobItemGrid'
import UserCard from '../user/UserCard'
import {
    UilAngleDown,
    UilUsdCircle,
    UilClockThree,
    UilBriefcaseAlt,
    UilAngleUp,
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

function OfferItemCard({ offer }) {
    const [isShowDetail, setIsShowDetail] = useState(false)

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
                className={`flex items-center justify-between gap-x-2 ${
                    isShowDetail ? 'hidden' : ''
                }`}
            >
                <div className="w-72">
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
                    iconElement={<UilClockThree size="24" />}
                    title="Dự kiến hoàn thành"
                    description={formatTime(dateEnd)}
                />

                <JobItemGrid
                    iconElement={<UilBriefcaseAlt size="24" />}
                    title="Đã gửi lúc: "
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
                    sidebar={<UserProfileCard user={freelancerId} />}
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