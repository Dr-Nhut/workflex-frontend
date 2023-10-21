function TitleSection({ children, color = '' }) {
    return (
        <h1
            className={`text-4xl font-semibold ${
                color ? color : 'text-primary'
            } text-center capitalize`}
        >
            {children}
        </h1>
    )
}

export default TitleSection
