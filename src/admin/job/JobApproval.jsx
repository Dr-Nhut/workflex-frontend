import { useMutation, useQuery } from '@tanstack/react-query'
import Button from '../../common/buttons/Button'
import { approvalJob } from '../../services/apiJob'
import { createNotification } from '../../services/apiNotification'
import Spinner from '../../ui/Spinner'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Modal from '../../ui/Modal-v1'
import RefuseJob from './RefuseJob'
import { useContext } from 'react'
import { UserContext } from '../../features/user/userSlice'
import { getFreelancerRecommendation } from '../../services/apiRecommendation'

function JobApprove({ jobDetail }) {
    const { user, socket } = useContext(UserContext)
    const jobId = jobDetail.id
    const navigate = useNavigate()

    const { isLoading: loadingRecommendation, data: topFreelancers } = useQuery(
        {
            queryKey: ['get-freelancer-recommendation', jobDetail.categoryId],
            queryFn: () => getFreelancerRecommendation(jobDetail.categoryId),
        }
    )

    const { mutate: mutateCreateNotification } = useMutation({
        mutationFn: createNotification,
        onError: (err) => {
            toast.error(err.message)
        },
    })

    const { isLoading, mutate: mutateApprovalJob } = useMutation({
        mutationFn: approvalJob,
        onSuccess: (response) => {
            toast.success(response.data.message)
            navigate(-1)
            socket.emit('sendNotificationForNewJob', {
                employerId: jobDetail.employerId,
                description: jobDetail.name,
                type: response.data.type === 'approval' ? 1 : 2,
                topFreelancers: topFreelancers.map(
                    (freelancer) => freelancer.freelancerId
                ),
            })
            mutateCreateNotification({
                senderId: user.id,
                receiverId: jobDetail.employerId,
                description: jobDetail.name,
                type: response.data.type === 'approval' ? 1 : 2,
            })
            if (response.data.type === 'approval') {
                topFreelancers.forEach((item) => {
                    mutateCreateNotification({
                        senderId: user.id,
                        receiverId: item.freelancerId,
                        description: jobDetail.name,
                        type: 4,
                    })
                })
            }
        },
        onError: (err) => console.log(err),
    })

    if (loadingRecommendation) return null

    return (
        <div className="col-span-3 m-4 h-48 rounded bg-stone-200 px-4 py-8">
            <h2 className="mb-2 text-xl font-semibold">Phê duyệt công việc</h2>
            <Button
                onClick={() => {
                    mutateApprovalJob({
                        id: jobId,
                        payload: {
                            approval: true,
                            bidDeadline: jobDetail.bidDeadline,
                        },
                    })
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
                    <RefuseJob jobDetail={jobDetail} />
                </Modal.Window>
            </Modal>
        </div>
    )
}

export default JobApprove
