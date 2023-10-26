import { useMutation } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import { updateJob } from '../../services/apiJob'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ConfirmCompleteJob({ onCloseModal, jobId }) {
    const navigate = useNavigate()
    const { isLoading: loadingUpdateJob, mutate } = useMutation({
        mutationFn: updateJob,
        onSuccess: () => {
            navigate('/employer-job')
            toast.success('Thông tin dự án đã thay đổi')
        },
    })

    return (
        <>
            <DescriptionSection align="text-justify">
                Dự án của bạn đã được hoàn thành?
            </DescriptionSection>

            <div className="flex items-center justify-end">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy
                </Button>
                <Button
                    onClick={() =>
                        mutate({
                            id: jobId,
                            payload: {
                                status: 'Đã hoàn thành',
                                completedAt: new Date(),
                            },
                        })
                    }
                    type="btn-primary rounded-xl"
                >
                    {loadingUpdateJob ? <Spinner /> : 'Xác nhận'}
                </Button>
            </div>
        </>
    )
}

export default ConfirmCompleteJob
