import { Link } from 'react-router-dom'

function CardContainer({ children, row, jobId }) {
    return (
        <div
            className={`mb-4 ${
                row && 'flex items-center justify-between'
            } rounded-lg bg-stone-200 p-4`}
        >
            {jobId ? (
                <Link to={`/contract?job=${jobId}`}>{children}</Link>
            ) : (
                children
            )}
        </div>
    )
}

export default CardContainer
