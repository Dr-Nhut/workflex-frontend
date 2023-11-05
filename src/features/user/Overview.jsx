import {
    UilUserSquare,
    UilCommentAltChartLines,
} from '@iconscout/react-unicons'

import TitleSection from '../../ui/TitleSection'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Feedback from '../../ui/Feedback'
import { useQuery } from '@tanstack/react-query'
import { getAllEvaluationByUser } from '../../services/apiEvaluation'
import Spinner from '../../ui/Spinner'

function Overview({ userId }) {
    const { isLoading, data } = useQuery({
        queryKey: ['evaluations', userId],
        queryFn: () => getAllEvaluationByUser(userId),
    })

    return (
        <>
            <section className="border-b p-4">
                <TitleSection icon={UilUserSquare}>
                    Giới thiệu về tôi
                </TitleSection>
                <DescriptionSection align="text-justify">
                    Your Cost-effective, Cross-continental Digital Innovation
                    Partner At Scopic, we combine tailor-made software
                    development, unique web design, and creative digital
                    marketing to become the one-stop shop for industry
                    innovation. Scopic is a U.S.-based company specializing in
                    the creation of custom IT solutions for web, mobile, and
                    desktop. We offer visually engaging and user-centric
                    interactive solutions tailored to your business needs. We
                    are also an official Google Partner - our marketers are
                    fully certified in Google Ads and can build, grow, and
                    maximize your campaign efforts.
                </DescriptionSection>
            </section>

            <section className="border-b p-4">
                <TitleSection icon={UilCommentAltChartLines}>
                    Đánh giá nổi bật
                </TitleSection>
                {isLoading ? (
                    <Spinner />
                ) : (
                    data.map((evaluation) => (
                        <Feedback
                            key={evaluation.id}
                            fullname={evaluation.fullname}
                            avatar={evaluation.avatar}
                            stars={evaluation.stars}
                            comment={evaluation.comment}
                            createAt={evaluation.createAt}
                        />
                    ))
                )}
            </section>
        </>
    )
}

export default Overview
