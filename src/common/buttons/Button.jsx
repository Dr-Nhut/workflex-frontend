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
            className={`flex cursor-pointer items-center font-semibold capitalize ${type} ${size} ${className}`}
            onClick={onClick}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
}

export default Button
