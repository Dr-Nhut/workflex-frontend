import { useMutation, useQueryClient } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import { delelteTask } from '../../services/apiTask'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'

function DeleteTask({ onCloseModal, taskId, contractId }) {
    const queryClient = useQueryClient()
    const { isLoading, mutate } = useMutation({
        mutationFn: delelteTask,
        onSuccess: (response) => {
            toast.success(response.message)
            onCloseModal()
            queryClient.invalidateQueries({ queryKey: ['tasks', contractId] })
        },
    })

    return (
        <div>
            <span>Bạn có chắc muốn xóa nhiệm vụ?</span>

            <div className="mt-2 flex items-center justify-end">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy
                </Button>
                <Button
                    type="btn-primary rounded-xl"
                    onClick={() => mutate(taskId)}
                >
                    {isLoading ? <Spinner /> : 'Xác nhận'}
                </Button>
            </div>
        </div>
    )
}

export default DeleteTask
