function TitleSection({ children, color = '' }) {
    return (
        <h1
            className={`text-4xl font-semibold ${color} text-center capitalize text-primary`}
        >
            {children}
        </h1>
    )
}

export default TitleSection
