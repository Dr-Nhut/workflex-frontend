import formatTime from '../utils/formatTime'
import Table from './Table'
import { UilTimesCircle, UilEdit } from '@iconscout/react-unicons'
import Modal from './Modal-v1'
import ConfirmDeleteJob from '../features/jobs/ConfirmDeleteJob'

function EmployerPendingJobRow({ job }) {
    const { id, category, name, createAt, maxBudget } = job

    return (
        <Table.Row>
            <td className="col-span-2">{category}</td>
            <td className="col-span-4 line-clamp-1 text-left">{name}</td>
            <td className="col-span-2">{formatTime(createAt)}</td>
            <td className="col-span-1">{maxBudget}</td>
            <td className="col-span-1 flex justify-center gap-x-2 text-stone-500 ">
                <UilEdit className="hover:text-stone-800" />
                <Modal>
                    <Modal.Open opens="deleteJob">
                        <UilTimesCircle className="hover:text-stone-800" />
                    </Modal.Open>
                    <Modal.Window
                        name="deleteJob"
                        title="Xóa công việc của bạn"
                    >
                        <ConfirmDeleteJob jobId={id} />
                    </Modal.Window>
                </Modal>
            </td>
        </Table.Row>
    )
}

export default EmployerPendingJobRow
