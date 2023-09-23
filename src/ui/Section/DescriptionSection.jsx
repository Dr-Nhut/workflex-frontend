function DescriptionSection({ children, align = 'text-center' }) {
    return <p className={`p-2 ${align} text-stone-500`}>{children}</p>
}

export default DescriptionSection
