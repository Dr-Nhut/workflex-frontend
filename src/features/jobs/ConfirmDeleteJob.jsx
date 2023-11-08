import { useMutation, useQueryClient } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Spinner from '../../ui/Spinner'
import { deleteJob } from '../../services/apiJob'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function ConfirmCompleteJob({ onCloseModal, jobId }) {
    const { user } = useContext(UserContext)
    const queryClient = useQueryClient()
    const { isLoading, mutate: jobDelete } = useMutation({
        mutationFn: deleteJob,
        onSuccess: (response) => {
            toast.success(response.data.message)
            queryClient.invalidateQueries({
                queryKey: ['pending-jobs', user.id],
            })
            onCloseModal()
        },
    })

    return (
        <>
            <DescriptionSection align="text-justify">
                Bạn có chắc muốn xóa công việc?
            </DescriptionSection>

            <div className="flex items-center justify-end">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy
                </Button>
                <Button
                    onClick={() => jobDelete(jobId)}
                    type="btn-primary rounded-xl"
                >
                    {isLoading ? <Spinner /> : 'Xác nhận'}
                </Button>
            </div>
        </>
    )
}

export default ConfirmCompleteJob
