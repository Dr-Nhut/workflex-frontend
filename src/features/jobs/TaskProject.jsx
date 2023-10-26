import Button from '../../common/buttons/Button'
import Table from '../../ui/Table'
import TitleSection from '../../ui/TitleSection'
import { UserContext } from '../user/userSlice'
import { useContext } from 'react'
import TaskRow from '../tasks/TaskRow'

const task = 2

function TaskProject() {
    const { user } = useContext(UserContext)
    return (
        <div className="m-4">
            {task === 0 ? (
                <div className="flex flex-col items-center">
                    <span>Danh sách nhiệm vụ chưa được tạo</span>
                    {user.role === 'fre' && (
                        <Button type="btn-primary" className="mt-2 rounded-xl">
                            Tạo ngay
                        </Button>
                    )}
                </div>
            ) : (
                <>
                    <header className="flex items-center justify-between">
                        <TitleSection>Danh sách nhiệm vụ</TitleSection>
                        {user.role === 'fre' && (
                            <Button
                                type="btn-primary"
                                size="small"
                                className="rounded"
                            >
                                Thêm nhiệm vụ
                            </Button>
                        )}
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
                            <TaskRow />
                        </Table.Body>
                    </Table>
                </>
            )}
        </div>
    )
}

export default TaskProject
