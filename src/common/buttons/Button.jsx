function Button({
    children,
    onClick,
    type = 'text',
    size = 'medium',
    className = '',
    icon,
}) {
    return (
        <button
            className={`flex cursor-pointer items-center font-semibold capitalize ${type} ${size} ${className} focus-visible:bg-sky-600 focus-visible:outline-none`}
            onClick={onClick}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

export default Button
