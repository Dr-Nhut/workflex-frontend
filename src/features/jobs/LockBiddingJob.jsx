import { useMutation, useQueryClient } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import { updateJob } from '../../services/apiJob'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'

function LockBiddingJob({ jobId, onCloseModal, status }) {
    const queryClient = useQueryClient()

    const { mutate, isLoading } = useMutation({
        mutationFn: updateJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['acceptingBidsJob'] })
            toast.success(
                status === 'Đang chào giá'
                    ? 'Khóa chào giá của công việc thành công!'
                    : 'Mở chào giá công việc thành công'
            )
            onCloseModal()
        },
        onError: (err) => toast.error(err.message),
    })
    return (
        <>
            <DescriptionSection align="text-left">
                {status === 'Đang chào giá'
                    ? 'Khi khóa chào giá công việc này sẽ không được hiển thị để nhận chào giá mới, bạn có chắc muốn khóa chào giá không?'
                    : 'Bạn muốn mở chào giá lại cho công việc này?'}
            </DescriptionSection>

            <div className="flex justify-end gap-x-4">
                <Button onClick={onCloseModal} type="btn-text">
                    Hủy
                </Button>
                <Button
                    type="btn-primary"
                    className="rounded-xl"
                    onClick={() =>
                        mutate({
                            id: jobId,
                            payload: {
                                status:
                                    status === 'Đang chào giá'
                                        ? 'Khóa chào giá'
                                        : 'Đang chào giá',
                            },
                        })
                    }
                >
                    {isLoading ? (
                        <Spinner />
                    ) : status === 'Đang chào giá' ? (
                        'Khóa chào giá'
                    ) : (
                        'Mở chào giá'
                    )}
                </Button>
            </div>
        </>
    )
}

export default LockBiddingJob
