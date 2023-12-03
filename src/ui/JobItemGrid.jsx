function JobItemGrid({ iconElement, title, description }) {
    return (
        <div>
            <div className="mb-2 flex w-52 gap-x-2 font-semibold">
                <span>{iconElement}</span>
                <span>{title}</span>
            </div>
            <span className="pl-8">{description}</span>
        </div>
    )
}

export default JobItemGrid
