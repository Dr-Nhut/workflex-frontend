import { useNavigate } from 'react-router-dom'
import Button from '../../common/buttons/Button'
import Table from '../../ui/Table'
import formatTime from '../../utils/formatTime'

function PendingJobRow({ job }) {
    const navigate = useNavigate()
    return (
        <Table.Row>
            <td className="col-span-2">{job.category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{job.name}</td>
            <td className="col-span-2">{job.email}</td>
            <td className="col-span-2">{formatTime(job.bidDeadline)}</td>
            <td className="col-span-1">{job.maxBudget}</td>
            <td className="col-span-1">
                <Button
                    type="btn-primary"
                    className="rounded"
                    size="small"
                    onClick={() => navigate(`/admin/job-manager/${job.id}`)}
                >
                    Kiểm tra
                </Button>
            </td>
        </Table.Row>
    )
}

export default PendingJobRow
