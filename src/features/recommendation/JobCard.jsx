import { useNavigate } from 'react-router-dom'
import formatCurrency from '../../utils/formatCurrency'

function JobCard({ job }) {
    const navigate = useNavigate()
    return (
        <li
            onClick={() => navigate(`/freelancer-bids/${job.id}`)}
            className="mb-2 rounded-xl bg-stone-50 p-4"
        >
            <h2 className="line-clamp-2">{job.name}</h2>
            <span className="font-semibold italic">
                {formatCurrency(job.maxBudget)}
            </span>
        </li>
    )
}

export default JobCard
