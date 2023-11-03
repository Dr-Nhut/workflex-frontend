import { useQuery } from '@tanstack/react-query'
import formatTime from '../utils/formatTime'
import Table from './Table'
import { getOfferProcessing } from '../services/apiOffer'
import formatCurrency from '../utils/formatCurrency'
import { Link } from 'react-router-dom'
import Button from '../common/buttons/Button'
import Modal from './Modal-v1'
import Evaluation from '../features/evaluation/Evaluation'
import { getEvaluation } from '../services/apiEvaluation'

function CompleteJobRow({ job }) {
    const { isLoading, data: offer } = useQuery({
        queryKey: ['offer', job.id],
        queryFn: () => getOfferProcessing(job.id),
    })

    const { data: isCompletedComment } = useQuery({
        queryKey: ['check-completed', job.id],
        queryFn: () => getEvaluation(job.id),
    })

    console.log(isCompletedComment)

    if (isLoading) return null
    return (
        <Table.Row>
            <td className="col-span-2">{job.category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{job.name}</td>
            <td className="col-span-2">{formatTime(job.completedAt)}</td>
            <td className="col-span-1">{formatTime(offer.dateEnd)}</td>
            <td className="col-span-1">{formatCurrency(offer.price)}</td>
            <td className="col-span-2">
                {job.status === 6 ? (
                    <Link to={`/employer-job/${job.id}/payment`}>
                        Thanh toán
                    </Link>
                ) : isCompletedComment ? (
                    <span>Đã đánh giá</span>
                ) : (
                    <Modal>
                        <Modal.Open opens="evaluation">
                            <Button type="btn-text">Đánh giá</Button>
                        </Modal.Open>
                        <Modal.Window
                            name="evaluation"
                            title="Đánh giá freelancer"
                        >
                            <Evaluation jobId={job.id} />
                        </Modal.Window>
                    </Modal>
                )}
            </td>
        </Table.Row>
    )
}

export default CompleteJobRow
