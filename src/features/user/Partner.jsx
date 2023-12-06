import Feedback from '../../ui/Feedback'

function Partner({ partner }) {
    const result = partner
        .map((evaluation, index) => {
            const prePartner = [...partner]
                .slice(0, index)
                .filter((item) => item.fullname === evaluation.fullname)

            if (prePartner.length) return null
            return evaluation
        })
        .filter((item) => item !== null)
        .slice(0, 3)

    return (
        <section>
            <header className="mb-4">
                <h4 className="text-xl font-semibold capitalize text-stone-700">
                    Hợp tác gần đây
                </h4>
            </header>
            <div>
                {result.map((evaluation) => (
                    <Feedback
                        key={evaluation.id}
                        fullname={evaluation.fullname}
                        avatar={evaluation.avatar}
                        stars={evaluation.stars}
                        comment={evaluation.comment}
                        createAt={evaluation.createAt}
                    />
                ))}
            </div>
        </section>
    )
}

export default Partner
