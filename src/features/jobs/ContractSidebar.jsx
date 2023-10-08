import TitleSection from '../../ui/TitleSection'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Inbox from '../user/Inbox'
import UserCard from '../user/UserCard'
import Rectangle from '../../ui/Rectangle'
function ContractSidebar() {
    return (
        <div className="col-span-3 ml-8">
            <section className="mb-8">
                <TitleSection>Đối tác</TitleSection>

                <div className="flex items-center justify-between rounded-xl bg-stone-100 px-4">
                    <UserCard
                        fullName="David"
                        avatarUrl="https://i.pravatar.cc/150"
                    >
                        <span className="int italic text-stone-400 ">
                            Online
                        </span>
                    </UserCard>

                    <Inbox />
                </div>
            </section>

            <section>
                <TitleSection>Chi tiết dự án</TitleSection>
                <DescriptionSection align="text-justify">
                    Tôi đang tìm người sửa bốn bức ảnh điện thoại di động kém
                    chất lượng. Một cái đã được tải lên. Bạn có thể làm cho
                    chúng trông bán chuyên nghiệp không?
                </DescriptionSection>
            </section>

            <section>
                <TitleSection>Yêu cầu kỹ thuật</TitleSection>
                <div className="flex flex-wrap gap-x-2">
                    <Rectangle>HTML</Rectangle>
                    <Rectangle>CSS</Rectangle>
                    <Rectangle>React</Rectangle>
                </div>
            </section>
        </div>
    )
}

export default ContractSidebar
