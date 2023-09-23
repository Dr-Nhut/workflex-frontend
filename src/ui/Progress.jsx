import Tippy from '@tippyjs/react'

function Progress({ percent = 80, content }) {
    return (
        <Tippy content={content}>
            <div className="h-4 w-3/5 rounded-full bg-gray-300 dark:bg-gray-700">
                <div
                    className="rounded-full bg-green-600 p-0.5 text-center text-xs font-medium leading-none text-green-100"
                    style={{ width: percent + '%' }}
                >
                    {' '}
                    {percent}%
                </div>
            </div>
        </Tippy>
    )
}

export default Progress
