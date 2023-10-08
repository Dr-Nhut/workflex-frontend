import { UilEdit, UilTimesSquare } from '@iconscout/react-unicons'
import Button from '../../common/buttons/Button'
import Table from '../../ui/Table'
import Rectangle from '../../ui/Rectangle'
import TitleSection from '../../ui/TitleSection'
import OpenTaskDetail from './OpenTaskDetail'

const task = 2

function TaskProject() {
    return (
        <div className="m-4">
            {task === 0 ? (
                <div className="flex flex-col items-center">
                    <span>Bạn chưa tạo danh sách nhiệm vụ cho dự án</span>
                    <Button type="btn-primary" className="mt-2 rounded-xl">
                        Tạo ngay
                    </Button>
                </div>
            ) : (
                <>
                    <header className="flex items-center justify-between">
                        <TitleSection>Danh sách nhiệm vụ</TitleSection>
                        <Button
                            type="btn-primary"
                            size="small"
                            className="rounded"
                        >
                            Thêm nhiệm vụ
                        </Button>
                    </header>

                    <Table columns="grid-cols-11">
                        <Table.Header>
                            <th className="col-span-1"></th>
                            <th className="col-span-3">Tên nhiệm vụ</th>
                            <th className="col-span-2">Bắt đầu</th>
                            <th className="col-span-2">Kết thúc</th>
                            <th className="col-span-2">Trạng thái</th>
                            <th></th>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <td className="col-span-1">
                                    <OpenTaskDetail />
                                </td>
                                <td className="col-span-3">
                                    Thiết kế giao diện
                                </td>
                                <td className="col-span-2">28/09/2023</td>
                                <td className="col-span-2">28/10/2023</td>
                                <td className="col-span-2">
                                    <Rectangle background="bg-green-500">
                                        Đang thực hiện
                                    </Rectangle>
                                </td>
                                <td className="col-span-1 flex gap-x-1">
                                    <UilEdit />
                                    <UilTimesSquare />
                                </td>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </>
            )}
        </div>
    )
}

export default TaskProject
