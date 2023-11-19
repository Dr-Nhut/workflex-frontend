import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Button from '../../common/buttons/Button'
import Spinner from '../../ui/Spinner'
import { blockAccount } from '../../services/apiAdmin'

function ConfirmBlockAccount({ onCloseModal, accountId }) {
    const queryClient = useQueryClient()
    const { isLoading: loadingBlockAccount, mutate } = useMutation({
        mutationFn: blockAccount,
        onSuccess: () => {
            onCloseModal()
            toast.success('Đã khoá tài khoản thành công')
            queryClient.invalidateQueries({ queryKey: ['all-account'] })
        },
    })

    return (
        <>
            <DescriptionSection align="text-justify">
                Bạn có chắc muốn khóa tài khoản này?
            </DescriptionSection>

            <div className="flex items-center justify-end">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy
                </Button>
                <Button
                    onClick={() =>
                        mutate({
                            id: accountId,
                            payload: {
                                status: 1,
                            },
                        })
                    }
                    type="btn-primary rounded-xl"
                >
                    {loadingBlockAccount ? <Spinner /> : 'Xác nhận'}
                </Button>
            </div>
        </>
    )
}

export default ConfirmBlockAccount
