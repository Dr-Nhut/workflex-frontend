function Label({ children }) {
    return (
        <label className="px-2 font-semibold text-stone-500" htmlFor={children}>
            {children}
        </label>
    )
}

export default Label
