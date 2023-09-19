import Button from '../../common/buttons/Button'
import DescriptionSection from './DescriptionSection'
import TitleSection from './TitleSection.jsx'

function BannerSection() {
    return (
        <div className="bg-stale-50 flex justify-between overflow-hidden rounded-xl shadow-lg shadow-gray-400">
            <div className="w-3/5 bg-stone-50 px-12 pb-16 pt-8">
                <TitleSection>Tự do và linh hoạt</TitleSection>
                <DescriptionSection>
                    Nơi tuyệt vời để bạn tìm kiếm cơ hội và phát triển bản thân
                </DescriptionSection>
                <div className="py-8 pl-8 text-justify text-xl font-light text-stone-700">
                    <p className="flex gap-x-2 p-2">
                        <span className="w-6 text-center">💻</span>Làm việc từ
                        bất kỳ đâu
                    </p>
                    <p className="flex gap-x-2 p-2">
                        <span className="w-6 text-center">⏲</span>Tận dụng thời
                        gian và không bị ràng buộc bởi giờ làm việc cố định
                    </p>
                    <p className="flex gap-x-2 p-2">
                        <span className="w-6 text-center">🎈</span>Làm việc trên
                        những dự án và lĩnh vực mà bạn đam mê
                    </p>
                </div>
                <Button type="btn-primary rounded-xl mx-auto">
                    Khám phá ngay
                </Button>
            </div>

            <div className="w-2/5">
                <img
                    src="banner-1.jpg"
                    alt="banner"
                    className="h-full w-full"
                />
            </div>
        </div>
    )
}

export default BannerSection
