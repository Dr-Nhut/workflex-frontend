import { useMutation, useQueryClient } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import { deleteOffer } from '../../services/apiOffer'

function ConfirmCompleteOfer({ onCloseModal, offerId }) {
    const { user } = useContext(UserContext)
    const queryClient = useQueryClient()
    const { isLoading, mutate: offerDelete } = useMutation({
        mutationFn: deleteOffer,
        onSuccess: () => {
            toast.success('Xóa chào giá thành công')
            queryClient.invalidateQueries({
                queryKey: ['offersByFreelancer', user.id],
            })
            onCloseModal()
        },
    })

    return (
        <>
            <DescriptionSection align="text-justify">
                Bạn có chắc muốn xóa chào giá?
            </DescriptionSection>

            <div className="flex items-center justify-end">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy
                </Button>
                <Button
                    onClick={() => offerDelete(offerId)}
                    type="btn-primary rounded-xl"
                >
                    {isLoading ? <Spinner /> : 'Xác nhận'}
                </Button>
            </div>
        </>
    )
}

export default ConfirmCompleteOfer
