function JobItemGrid({ iconElement, title, description }) {
    return (
        <div className="mb-2 grid grid-cols-2 gap-x-1">
            <span className="flex items-center gap-x-1 font-semibold">
                {iconElement}
                {title}
            </span>
            <span>{description}</span>
        </div>
    )
}

export default JobItemGrid
