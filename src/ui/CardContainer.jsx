function CardContainer({ children, row }) {
    return (
        <div
            className={`mb-4 ${
                row && 'flex items-center justify-between'
            } rounded-lg bg-stone-200 p-2`}
        >
            {children}
        </div>
    )
}

export default CardContainer
