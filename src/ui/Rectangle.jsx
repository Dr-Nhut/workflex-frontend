function Rectangle({ children, primary }) {
    return (
        <span
            className={`rounded ${
                primary
                    ? 'border-2 p-2 font-semibold text-stone-900'
                    : 'border-2 p-2 text-sm text-stone-500'
            } `}
        >
            {children}
        </span>
    )
}

export default Rectangle
