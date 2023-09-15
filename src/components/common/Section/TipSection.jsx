import Blog from './Blog'
import DescriptionSection from './DescriptionSection'
import TitleSection from './TitleSection'

function TipSection() {
    return (
        <div className="flex justify-between rounded-xl overflow-hidden shadow-lg shadow-gray-400 bg-stale-50">
            <div className="px-12 pt-8 pb-16 bg-stone-50">
                <TitleSection>Giới thiệu</TitleSection>
                <DescriptionSection>
                    Cho chúng tôi biết dự án của bạn, chúng tôi sẽ nhanh chóng
                    đưa đến bạn những freelancer phù hợp nhất
                </DescriptionSection>

                <div className="grid grid-cols-12 gap-5 mt-8">
                    <Blog
                        thumbnail="blog_3.jpg"
                        title="Thật dễ dàng để bắt đầu"
                        description="Chỉ cần tham gia miễn phí, đăng công việc của bạn và bắt đầu nhận Báo giá từ freelancer."
                    />

                    <Blog
                        thumbnail="blog_1.jpg"
                        title="Tìm kiếm freelancer thế nào?"
                        description="Xem xét, so sánh và lựa chọn freelancer phù hợp với công việc của bạn."
                    />

                    <Blog
                        thumbnail="blog_2.jpg"
                        title="Thanh toán an toàn cho công việc"
                        description="Trả tiền cho Freelancer thông qua hệ thống thanh toán an toàn của chúng tôi."
                    />
                </div>
            </div>
        </div>
    )
}

export default TipSection
