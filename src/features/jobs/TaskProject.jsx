import Button from '../../common/buttons/Button'
import Table from '../../ui/Table'
import TitleSection from '../../ui/TitleSection'
import { UserContext } from '../user/userSlice'
import { useContext } from 'react'
import TaskRow from '../tasks/TaskRow'
import { useQuery } from '@tanstack/react-query'
import { getContractTasks } from '../../services/apiTask'
import Spinner from '../../ui/Spinner'
import Modal from '../../ui/Modal-v1'
import PostTask from '../tasks/PostTask'

function TaskProject({ contract }) {
    const { user } = useContext(UserContext)

    const {
        isLoading,
        data: tasks,
        // error,
    } = useQuery({
        queryKey: ['tasks', contract],
        queryFn: () => getContractTasks(contract),
    })

    if (isLoading) return <Spinner />

    return (
        <div className="m-4">
            {tasks.length === 0 ? (
                <div className="flex flex-col items-center">
                    <span>Danh sách nhiệm vụ chưa được tạo</span>
                    {user.role === 'fre' && (
                        <Modal>
                            <Modal.Open opens="post-task">
                                <Button
                                    type="btn-primary"
                                    className="mt-2 rounded-xl"
                                >
                                    Tạo ngay
                                </Button>
                            </Modal.Open>
                            <Modal.Window
                                name="post-task"
                                title="Thêm nhiệm vụ"
                            >
                                <PostTask contractId={contract} />
                            </Modal.Window>
                        </Modal>
                    )}
                </div>
            ) : (
                <>
                    <header className="flex items-center justify-between">
                        <TitleSection>Danh sách nhiệm vụ</TitleSection>
                        {user.role === 'fre' && (
                            <Modal>
                                <Modal.Open opens="post-task">
                                    <Button
                                        type="btn-primary"
                                        size="small"
                                        className="rounded"
                                    >
                                        Thêm nhiệm vụ
                                    </Button>
                                </Modal.Open>
                                <Modal.Window
                                    name="post-task"
                                    title="Thêm nhiệm vụ"
                                >
                                    <PostTask contractId={contract} />
                                </Modal.Window>
                            </Modal>
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
                            {tasks.map((task) => (
                                <TaskRow key={task.id} task={task} />
                            ))}
                        </Table.Body>
                    </Table>
                </>
            )}
        </div>
    )
}

export default TaskProject
