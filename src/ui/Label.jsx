function Label({ children }) {
    return (
        <span className="flex gap-x-2 font-semibold text-stone-900/80 hover:text-stone-900">
            {children}
        </span>
    )
}

export default Label
