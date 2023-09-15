import Button from '../../Button/Button'
import DescriptionSection from './DescriptionSection'
import TitleSection from './TitleSection.jsx'

function BannerSection() {
    return (
        <div className="flex justify-between rounded-xl overflow-hidden shadow-lg shadow-gray-400 bg-stale-50">
            <div className="w-3/5 px-12 pt-8 pb-16 bg-stone-50">
                <TitleSection>Tự do và linh hoạt</TitleSection>
                <DescriptionSection>
                    Nơi tuyệt vời để bạn tìm kiếm cơ hội và phát triển bản thân
                </DescriptionSection>
                <div className="py-8 pl-8 text-xl text-stone-700 text-justify font-light">
                    <p className="p-2 flex gap-x-2">
                        <span className="w-6 text-center">💻</span>Làm việc từ
                        bất kỳ đâu
                    </p>
                    <p className="p-2 flex gap-x-2">
                        <span className="w-6 text-center">⏲</span>Tận dụng thời
                        gian và không bị ràng buộc bởi giờ làm việc cố định
                    </p>
                    <p className="p-2 flex gap-x-2">
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
                    className="w-full h-full"
                />
            </div>
        </div>
    )
}

export default BannerSection
