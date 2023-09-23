import DescriptionSection from './Section/DescriptionSection'
import TitleSection from './Section/TitleSection'

function PageHeader({ title, description }) {
    return (
        <>
            <section className="border-t-4 border-sky-400 pt-8">
                <TitleSection>{title}</TitleSection>
                <DescriptionSection>{description}</DescriptionSection>
            </section>
        </>
    )
}

export default PageHeader
