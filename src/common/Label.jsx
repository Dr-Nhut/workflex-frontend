function Label({ children }) {
    return (
        <label className="px-2 text-stone-500 font-semibold" htmlFor={children}>
            {children}
        </label>
    )
}

export default Label
