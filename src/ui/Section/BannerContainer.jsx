import Button from '../../common/buttons/Button'
import StepWork from './StepWork'
import TitleSection from './TitleSection'
import {
    UilFileSearchAlt,
    UilBill,
    UilArrow,
    UilCheckCircle,
} from '@iconscout/react-unicons'

function BannerContainer() {
    return (
        <div className="rounded-xl p-16">
            <TitleSection>Làm việc với Work Flex</TitleSection>
            <div className="mt-16 flex justify-between gap-x-10 px-5">
                <StepWork
                    elementIcon={UilFileSearchAlt}
                    title="Tìm việc"
                    description="Khám phá các công việc tuyệt vời trong lĩnh vực của bạn"
                    nextIcon
                />
                <StepWork
                    elementIcon={UilBill}
                    title="Báo giá"
                    description="Một lời chào giá chuyên nghiệp sẽ hấp dẫn nhà tuyển dụng"
                    nextIcon
                />
                <StepWork
                    elementIcon={UilArrow}
                    title="Thực hiện"
                    description="Hợp tác và liên lạc một cách linh hoạt và hiệu quả"
                    nextIcon
                />
                <StepWork
                    elementIcon={UilCheckCircle}
                    title="Hoàn thành"
                    description="Sự hài lòng của đối tác sẽ giúp hồ sơ bạn trở nên tuyệt vời hơn"
                />
            </div>
            <Button type="btn-primary" className="mx-auto mt-5 rounded-xl">
                Xem chi tiết
            </Button>
        </div>
    )
}

export default BannerContainer
