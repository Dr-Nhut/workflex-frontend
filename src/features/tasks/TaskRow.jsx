import Modal from '../../ui/Modal-v1'
import Rectangle from '../../ui/Rectangle'
import Table from '../../ui/Table'
import { UilEdit, UilTimesSquare, UilEye } from '@iconscout/react-unicons'
import TaskItemDetail from '../jobs/TaskItemDetail'
import formatTime from '../../utils/formatTime'

function TaskRow({ task }) {
    const { name, dateStart, dateEnd, status } = task
    return (
        <Table.Row>
            <td className="col-span-1">
                <Modal>
                    <Modal.Open opens="task">
                        <UilEye className="mx-auto text-stone-500 hover:text-green-600" />
                    </Modal.Open>

                    <Modal.Window title="Chi tiết nhiệm vụ" name="task">
                        <TaskItemDetail task={task} />
                    </Modal.Window>
                </Modal>
            </td>
            <td className="col-span-3">{name}</td>
            <td className="col-span-2">{formatTime(dateStart)}</td>
            <td className="col-span-2">{formatTime(dateEnd)}</td>
            <td className="col-span-2">
                <Rectangle
                    background={`${
                        status === 0 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                >
                    {status === 0 ? 'Đang thực hiện' : 'Đã hoàn thành'}
                </Rectangle>
            </td>
            <td className="col-span-1 flex gap-x-1">
                <UilEdit />
                <UilTimesSquare />
            </td>
        </Table.Row>
    )
}

export default TaskRow
