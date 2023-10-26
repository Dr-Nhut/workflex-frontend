import Modal from '../../ui/Modal-v1'
import Rectangle from '../../ui/Rectangle'
import Table from '../../ui/Table'
import { UilEdit, UilTimesSquare, UilEye } from '@iconscout/react-unicons'
import TaskItemDetail from '../jobs/TaskItemDetail'

function TaskRow() {
    return (
        <Table.Row>
            <td className="col-span-1">
                <Modal>
                    <Modal.Open opens="task">
                        <UilEye className="mx-auto text-stone-500 hover:text-green-600" />
                    </Modal.Open>

                    <Modal.Window title="Chi tiết nhiệm vụ" name="task">
                        <TaskItemDetail />
                    </Modal.Window>
                </Modal>
            </td>
            <td className="col-span-3">Thiết kế giao diện</td>
            <td className="col-span-2">28/09/2023</td>
            <td className="col-span-2">28/10/2023</td>
            <td className="col-span-2">
                <Rectangle background="bg-green-500">Đang thực hiện</Rectangle>
            </td>
            <td className="col-span-1 flex gap-x-1">
                <UilEdit />
                <UilTimesSquare />
            </td>
        </Table.Row>
    )
}

export default TaskRow
