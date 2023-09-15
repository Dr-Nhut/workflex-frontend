function Section({ children, className = '' }) {
    return (
        <section className={`${className} w-[1296px] mx-auto mt-8`}>
            {children}
        </section>
    )
}

export default Section
