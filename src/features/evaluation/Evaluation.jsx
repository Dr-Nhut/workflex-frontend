import Button from '../../common/buttons/Button'
import StarRating from '../../ui/StarRating'
import Label from '../../common/Label'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createEvaluation } from '../../services/apiEvaluation'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import { createNotification } from '../../services/apiNotification'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function Evaluation({ onCloseModal, jobId, freelancerId, employerId }) {
    const { user, socket } = useContext(UserContext)
    const queryClient = useQueryClient()
    const [numStars, setNumStars] = useState(1)
    const [cmt, setCmt] = useState('')

    const { mutate: mutateCreateNotification } = useMutation({
        mutationFn: createNotification,
        onError: (err) => {
            toast.error(err.message)
        },
    })

    const { isLoading, mutate } = useMutation({
        mutationFn: createEvaluation,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['check-completed', jobId],
            })
            socket.emit('sendFromFreelancerToEmployer', {
                senderId: user.id,
                receiverId: user.role === 'emp' ? freelancerId : employerId,
                description: '',
                type: 10,
            })
            mutateCreateNotification({
                senderId: user.id,
                receiverId: user.role === 'emp' ? freelancerId : employerId,
                description: '',
                type: 10,
            })
            toast.success('Gửi đánh giá thành công')
            onCloseModal()
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        mutate({
            id: jobId,
            payload: {
                stars: numStars,
                comment: cmt,
                receiverId: user.role === 'emp' ? freelancerId : employerId,
            },
        })
    }

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            <Label>Đánh giá</Label>
            <StarRating value={numStars} onChange={setNumStars} />

            <div className="w-[500px]">
                <Label>Nhận xét</Label>
                <input
                    className="my-2 w-full rounded-xl bg-stone-200 p-2  pl-4 outline-none  ring-primary ring-offset-1 focus:ring-2"
                    type="text"
                    value={cmt}
                    onChange={(e) => setCmt(e.target.value)}
                    placeholder="Nhận xét về đối tác của bạn"
                />
            </div>

            <Button className="mx-auto rounded-xl" type="btn-primary">
                {isLoading ? <Spinner /> : 'Xác nhận'}
            </Button>
        </form>
    )
}

export default Evaluation
