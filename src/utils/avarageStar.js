export default function averageStar(evaluations) {
    if (evaluations.length === 0) return 0
    return (
        evaluations.reduce(
            (accumulator, currentValue) => accumulator + currentValue.stars,
            0
        ) / evaluations.length
    )
}