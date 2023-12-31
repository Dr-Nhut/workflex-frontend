import formatCurrency from '../utils/formatCurrency'
import formatTime from '../utils/formatTime'
import Table from './Table'
import {
    UilTimesCircle,
    UilPadlock,
    UilUnlockAlt,
} from '@iconscout/react-unicons'
import Modal from './Modal-v1'
import LockBiddingJob from '../features/jobs/LockBiddingJob'
import ConfirmDeleteJob from '../features/jobs/ConfirmDeleteJob'

function EmployerBiddingJobRow({ job, onClick }) {
    const { id, category, name, bidDeadline, duration, maxBudget, status } = job

    return (
        <Table.Row onClick={onClick} disabled={status !== 3 ? true : false}>
            <td className="col-span-2">{category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{name}</td>
            <td className="col-span-2">{formatTime(bidDeadline)}</td>
            <td className="col-span-2">{duration} ngày</td>
            <td className="col-span-1">{formatCurrency(maxBudget)}</td>
            <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                <div
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Modal>
                        <Modal.Open opens="lock">
                            {status !== 3 ? (
                                <UilUnlockAlt className="hover:text-stone-800" />
                            ) : (
                                <UilPadlock className="hover:text-stone-800" />
                            )}
                        </Modal.Open>
                        <Modal.Window
                            name="lock"
                            title={
                                status === 3
                                    ? 'Khóa chào giá việc làm tạm thời'
                                    : 'Mở chào giá việc làm'
                            }
                        >
                            <LockBiddingJob jobId={id} status={status} />
                        </Modal.Window>
                    </Modal>
                </div>

                <div
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <Modal>
                        <Modal.Open opens="delete-job">
                            <UilTimesCircle className="hover:text-stone-800" />
                        </Modal.Open>
                        <Modal.Window name="delete-job" title="Xóa công việc">
                            <ConfirmDeleteJob jobId={id} />
                        </Modal.Window>
                    </Modal>
                </div>
            </td>
        </Table.Row>
    )
}

export default EmployerBiddingJobRow
