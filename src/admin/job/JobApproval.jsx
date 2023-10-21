import { useMutation } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import { approvalJob } from '../../services/apiJob'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import Modal from '../../ui/Modal-v1'
import RefuseJob from './RefuseJob'

function JobApprove() {
    const jobId = useParams().id
    const navigate = useNavigate()
    const { isLoading, mutate } = useMutation({
        mutationFn: approvalJob,
        onSuccess: (response) => {
            toast.success(response.data.message)
            navigate(-1)
        },
        onError: (err) => console.log(err),
    })

    return (
        <div className="col-span-3 m-4 h-48 rounded bg-stone-200 px-4 py-8">
            <h2 className="mb-2 text-xl font-semibold">Phê duyệt công việc</h2>
            <Button
                onClick={() => {
                    mutate({ id: jobId, payload: { approval: true } })
                }}
                type="btn-primary"
                className="w-full justify-center rounded"
            >
                {isLoading ? <Spinner /> : 'Xác nhận'}
            </Button>
            <Modal>
                <Modal.Open opens="refuse">
                    <Button
                        // onClick={() => mutate({ id: jobId, approval: false })}
                        className="mt-4 w-full justify-center rounded"
                        type="btn-text"
                    >
                        {/* {isLoading ? <Spinner /> : 'Từ chối'} */}Từ chối
                    </Button>
                </Modal.Open>
                <Modal.Window name="refuse" title="Lý do từ chối công việc">
                    <RefuseJob />
                </Modal.Window>
            </Modal>
        </div>
    )
}

export default JobApprove
