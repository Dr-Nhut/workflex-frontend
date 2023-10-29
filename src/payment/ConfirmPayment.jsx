import { useMutation, useQueryClient } from '@tanstack/react-query'
import Button from '../common/buttons/Button'
import DescriptionSection from '../ui/Section/DescriptionSection'
import { updateJob } from '../services/apiJob'
import toast from 'react-hot-toast'

function ConfirmPayment({ job, onCloseModal }) {
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: updateJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['freelancer-paid-job'] })
            toast.success('Đã xác nhận thành công')
            onCloseModal()
        },
    })
    return (
        <>
            <DescriptionSection>
                Bạn đã nhận được số tiền thanh toán từ {job.name}?
            </DescriptionSection>

            <div className="flex items-center justify-end">
                <Button
                    type="btn-text"
                    onClick={() => {
                        mutate({
                            id: job.id,
                            payload: {
                                status: 'Chưa nhận thanh toán',
                            },
                        })
                    }}
                >
                    Chưa nhận
                </Button>
                <Button
                    type="btn-primary rounded"
                    onClick={() => {
                        mutate({
                            id: job.id,
                            payload: { status: 'Kết thúc' },
                        })
                    }}
                >
                    Đã nhận
                </Button>
            </div>
        </>
    )
}

export default ConfirmPayment
