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
            className={`flex items-center capitalize font-semibold cursor-pointer ${type} ${size} ${className}`}
            onClick={onClick}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

export default Button
