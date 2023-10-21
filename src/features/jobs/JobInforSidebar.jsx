import TitleSection from '../../ui/TitleSection'
import JobItemGrid from '../../ui/JobItemGrid'
import formatTime from '../../utils/formatTime'
import {
    UilClock,
    UilInvoice,
    UilUsdCircle,
    UilBookReader,
    UilPlay,
    UilHunting,
    UilWifi,
} from '@iconscout/react-unicons'
import formatCurrency from '../../utils/formatCurrency'
import UserCard from '../user/UserCard'
import { URL_SERVER_SIMPLE } from '../../constants'

function JobInforSidebar({ job }) {
    return (
        <div className="col-span-4 m-4 rounded bg-stone-200 p-4">
            <section>
                <TitleSection>Thông tin công việc</TitleSection>
                <div className="pl-2">
                    <JobItemGrid
                        iconElement={<UilClock size="24" />}
                        title="Ngày đăng"
                        description={formatTime(job.createAt)}
                    />

                    <JobItemGrid
                        iconElement={<UilInvoice />}
                        title="Hạn chào giá"
                        description={formatTime(job.bidDeadline)}
                    />

                    <JobItemGrid
                        iconElement={<UilUsdCircle />}
                        title="Ngân sách"
                        description={formatCurrency(job.maxBudget)}
                    />

                    <JobItemGrid
                        iconElement={<UilBookReader />}
                        title="Kinh nghiệm"
                        description={job.experience}
                    />

                    <JobItemGrid
                        iconElement={<UilPlay />}
                        title="Ngày bắt đầu"
                        description={formatTime(job.dateStart)}
                    />

                    <JobItemGrid
                        iconElement={<UilHunting />}
                        title="Thời gian dự kiến"
                        description={`${job.duration} ngày`}
                    />

                    <JobItemGrid
                        iconElement={<UilWifi />}
                        title="Loại công việc"
                        description={job.type}
                    />
                </div>
            </section>

            <section>
                <TitleSection>Thông tin nhà tuyển dụng</TitleSection>

                <div>
                    <UserCard
                        fullName={job.fullname}
                        avatarUrl={`${URL_SERVER_SIMPLE}${job.avatar}`}
                    >
                        {job.email}
                    </UserCard>
                </div>
            </section>
        </div>
    )
}

export default JobInforSidebar
