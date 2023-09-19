import Header from '../layouts/Header'
import Intro from '../ui/Section/Intro'
import BannerSection from '../ui/Section/BannerSection'
import Footer from '../layouts/Footer'
import Section from '../ui/Section/Section'
import TitleSection from '../ui/Section/TitleSection'
import JobList from '../ui/Section/JobList'
import BannerContainer from '../ui/Section/BannerContainer'
import TipSection from '../ui/Section/TipSection'

function HomePage() {
    return (
        <div className="bg-slate-100">
            <div className="h-screen bg-banner bg-cover bg-center">
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

            <Section className="w-full bg-slate-50">
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
