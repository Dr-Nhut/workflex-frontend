import { useQuery } from '@tanstack/react-query'
import formatTime from '../utils/formatTime'
import Table from './Table'
import { getOfferProcessing } from '../services/apiOffer'
import formatCurrency from '../utils/formatCurrency'
import Modal from './Modal-v1'
import Button from '../common/buttons/Button'
import ConfirmPayment from '../payment/ConfirmPayment'
import Evaluation from '../features/evaluation/Evaluation'
import { getEvaluation } from '../services/apiEvaluation'

//Thieu handle job chua nhan duoc thanh toan

function FreelancerPaidJobRow({ job }) {
    const { isLoading: offerLoading, data: offer } = useQuery({
        queryKey: ['offer', job.id],
        queryFn: () => getOfferProcessing(job.id),
    })

    const { isLoading: evaluationLoading, data: evaluation } = useQuery({
        queryKey: ['evaluation', job.id],
        queryFn: () => getEvaluation(job.id),
    })

    if (offerLoading || evaluationLoading) return null
    return (
        <Table.Row>
            <td className="col-span-2">{job.category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{job.name}</td>
            <td className="col-span-2">{formatTime(job.completedAt)}</td>
            <td className="col-span-1">{formatTime(offer.dateEnd)}</td>
            <td className="col-span-1">{formatCurrency(offer.price)}</td>
            <td className="col-span-2">
                {job.status === 8 ? (
                    <Modal>
                        <Modal.Open opens="confirm-payment">
                            <Button type="btn-text">Xác nhận</Button>
                        </Modal.Open>
                        <Modal.Window
                            name="confirm-payment"
                            title="Xác nhận thanh toán"
                        >
                            <ConfirmPayment job={job} />
                        </Modal.Window>
                    </Modal>
                ) : evaluation?.id ? (
                    <span>Đã đánh giá</span>
                ) : (
                    <Modal>
                        <Modal.Open opens="rating-payment">
                            <Button type="btn-text">Đánh giá</Button>
                        </Modal.Open>
                        <Modal.Window
                            name="rating-payment"
                            title="Đánh giá nhà tuyển dụng"
                        >
                            <Evaluation
                                jobId={job.id}
                                freelancerId={offer.freelancerId}
                                employerId={job.employerId}
                            />
                        </Modal.Window>
                    </Modal>
                )}
            </td>
        </Table.Row>
    )
}

export default FreelancerPaidJobRow
