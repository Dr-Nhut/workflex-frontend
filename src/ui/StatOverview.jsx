function StatOverview({ title, number, className }) {
    return (
        <div
            className={`${className} cursor-pointer rounded-xl px-4 py-2 text-lg text-stone-50`}
        >
            <h4>{title}</h4>
            <span>
                <em className="text-6xl font-bold">{number}</em> dự án
            </span>
        </div>
    )
}

export default StatOverview
