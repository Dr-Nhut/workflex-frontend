import DescriptionSection from './Section/DescriptionSection'
import TitleSection from './Section/TitleSection'

function PageHeader() {
    return (
        <>
            <section className="border-bborder-sky-400 border-t-4 pt-8">
                <TitleSection>Việc làm Freelancer</TitleSection>
                <DescriptionSection>
                    Hàng trăm công việc khắp các lĩnh vực đang chờ đợi bạn
                </DescriptionSection>
            </section>
        </>
    )
}

export default PageHeader
