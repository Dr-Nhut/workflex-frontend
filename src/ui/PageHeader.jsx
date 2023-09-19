import DescriptionSection from './Section/DescriptionSection'
import TitleSection from './Section/TitleSection'

function PageHeader({ title, description }) {
    return (
        <>
            <section className="border-bborder-sky-400 border-t-4 pt-8">
                <TitleSection>{title}</TitleSection>
                <DescriptionSection>{description}</DescriptionSection>
            </section>
        </>
    )
}

export default PageHeader
