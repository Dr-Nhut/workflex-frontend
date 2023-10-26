import Rectangle from '../../ui/Rectangle'
import TitleSection from '../../ui/TitleSection'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'
import Tab from '../../ui/Tab'
import { useState } from 'react'
import MessageTask from './MessageTask'
import DocumentTask from './DocumentTask'
import formatTime from '../../utils/formatTime'
import Button from '../../common/buttons/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { completeTask } from '../../services/apiTask'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'

function TaskItemDetail({ onCloseModal, task }) {
    const queryClient = useQueryClient()
    const [isActive, setIsActive] = useState()
    const { name, description, dateEnd, status } = task

    const { isLoading, mutate } = useMutation({
        mutationFn: completeTask,
        onSuccess: () => {
            queryClient.invalidateQueries()
            toast.success('Đã cập nhật nhiệm vụ')
            onCloseModal()
        },
        onError: (err) => console.log(err),
    })

    const handleOnClick = () => {
        mutate({ taskId: task.id, payload: { status: 1 } })
    }

    return (
        <div className="w-[1200px]">
            <header className="my-2 flex items-center justify-between">
                <Rectangle
                    background={`${
                        status === 0 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                >
                    Đang thực hiện
                </Rectangle>

                <span>Thời hạn: {formatTime(dateEnd)}</span>
            </header>
            <main className="grid grid-cols-2 gap-x-4">
                <section className="col-span-1 border px-3 py-2">
                    <TitleSection>{name}</TitleSection>
                    <TextDescriptionEditor>{description}</TextDescriptionEditor>
                </section>

                <section className="col-span-1 border px-3 py-2">
                    <Tab
                        tabs={[
                            {
                                id: 1,
                                name: 'Thảo luận',
                            },
                            {
                                id: 2,
                                name: 'Tài liệu',
                            },
                        ]}
                        active={isActive}
                        onClick={setIsActive}
                    >
                        {isActive === 1 ? (
                            <MessageTask />
                        ) : (
                            <DocumentTask taskId={task.id} />
                        )}
                    </Tab>
                </section>
            </main>

            {status === 0 && (
                <footer className="mt-4">
                    <Button
                        onClick={handleOnClick}
                        className="mx-auto rounded-lg"
                        type="btn-primary"
                    >
                        {isLoading ? <Spinner /> : 'Hoàn thành'}
                    </Button>
                </footer>
            )}
        </div>
    )
}

export default TaskItemDetail
