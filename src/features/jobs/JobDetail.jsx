import { Link } from 'react-router-dom'
import Rectangle from '../../ui/Rectangle'
import TitleSection from '../../ui/TitleSection'
import UserCard from '../user/UserCard'
import { URL_SERVER_SIMPLE } from '../../constants'
import formatTime from '../../utils/formatTime'
import JobDetailItem from '../../ui/JobDetailItem'
import formatCurrency from '../../utils/formatCurrency'
import {
    UilInvoice,
    UilUsdCircle,
    UilBookReader,
    UilPlay,
    UilWifi,
} from '@iconscout/react-unicons'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'

function JobDetail({ jobDetail, simple }) {
    return (
        <div className="mt-4 px-8">
            <Link to="" className="mb-4 cursor-pointer text-primary">
                {jobDetail.category}
            </Link>

            <div className="my-2 flex gap-x-2">
                {jobDetail.skills.map((skill) => (
                    <Rectangle key={skill}>{skill}</Rectangle>
                ))}
            </div>

            <TitleSection>{jobDetail.name}</TitleSection>
            {!simple && (
                <div className="flex items-center justify-between">
                    <UserCard
                        fullName={jobDetail.fullname}
                        avatarUrl={`${URL_SERVER_SIMPLE}${jobDetail.avatar}`}
                    >
                        {jobDetail.email}
                    </UserCard>

                    <span>Đã đăng vào: {formatTime(jobDetail.createAt)}</span>
                </div>
            )}

            {!simple && (
                <div className="my-4 flex flex-wrap justify-between">
                    <JobDetailItem
                        icon={UilInvoice}
                        title="Hạn chào giá"
                        content={formatTime(jobDetail.bidDeadline)}
                    />

                    <JobDetailItem
                        icon={UilUsdCircle}
                        title="Ngân sách"
                        content={formatCurrency(jobDetail.maxBudget)}
                    />

                    <JobDetailItem
                        icon={UilBookReader}
                        title="Kinh nghiệm"
                        content={jobDetail.experience}
                    />

                    <JobDetailItem
                        icon={UilPlay}
                        title="Ngày bắt đầu"
                        content={formatTime(jobDetail.dateStart)}
                    />

                    <JobDetailItem
                        icon={UilWifi}
                        title="Loại công việc"
                        content={jobDetail.type}
                    />
                </div>
            )}

            <TextDescriptionEditor>
                {jobDetail.description}
            </TextDescriptionEditor>
        </div>
    )
}

export default JobDetail
