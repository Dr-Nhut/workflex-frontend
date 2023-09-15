import Header from '../components/common/Header'
import Intro from '../components/common/Section/Intro'
import BannerSection from '../components/common/Section/BannerSection'
import Footer from '../components/common/Footer'
import Section from '../components/common/Section/Section'
import TitleSection from '../components/common/Section/TitleSection'
import JobList from '../components/common/Section/JobList'
import BannerContainer from '../components/common/Section/BannerContainer'
import TipSection from '../components/common/Section/TipSection'

function HomePage() {
    return (
        <div className="bg-slate-100">
            <div className="h-screen bg-banner bg-cover bg-center	">
                <Header />
                <Intro />
            </div>

            <Section>
                <TitleSection>Công việc nổi bật</TitleSection>
                <JobList limit={4} />
            </Section>

            <Section>
                <BannerSection />
            </Section>

            <Section className="bg-slate-50 w-full">
                <BannerContainer />
            </Section>

            <Section>
                <TipSection />
            </Section>

            <Footer />
        </div>
    )
}

export default HomePage
