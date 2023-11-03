import Tippy from '@tippyjs/react'

function JobItemGrid({ iconElement, title, description }) {
    return (
        <div className="mb-2 flex w-52 gap-x-2">
            <Tippy content={title}>
                <span className="font-semibold">{iconElement}</span>
            </Tippy>
            <span>{description}</span>
        </div>
    )
}

export default JobItemGrid
