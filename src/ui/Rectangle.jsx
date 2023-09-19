function Rectangle({ children, primary }) {
    return (
        <span
            className={`rounded ${
                primary
                    ? 'bg-green-500/20 p-2 text-green-500'
                    : 'bg-stone-500/20 p-2 text-sm text-stone-500'
            } `}
        >
            {children}
        </span>
    )
}

export default Rectangle
