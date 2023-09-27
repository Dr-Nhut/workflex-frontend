function TitleSection({ icon: Icon, children }) {
    return (
        <h4 className="mb-4 flex items-center gap-x-2 text-xl font-semibold capitalize">
            {Icon && <Icon className="text-sky-600" />}
            {children}
        </h4>
    )
}

export default TitleSection
