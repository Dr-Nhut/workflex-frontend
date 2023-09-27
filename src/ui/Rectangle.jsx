function Rectangle({ children, primary, background }) {
    return (
        <span
            className={`rounded ${
                background && `text-slate-50 ${background}`
            } ${
                primary
                    ? `border-2 p-2 font-semibold ${
                          !background && 'text-stone-900'
                      }`
                    : `border-2 p-2 text-sm ${!background && 'text-stone-500'}`
            }`}
        >
            {children}
        </span>
    )
}

export default Rectangle
