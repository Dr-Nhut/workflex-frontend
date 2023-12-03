import { Link } from 'react-router-dom'
import { UilCheckCircle } from '@iconscout/react-unicons'
import Button from '../common/buttons/Button'
import { useEffect, useContext } from 'react'
import { createNotification } from '../services/apiNotification'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { UserContext } from '../features/user/userSlice'

function CheckoutSuccess() {
    const { user, socket } = useContext(UserContext)
    // const { state, pathname } = useLocation()
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!state) {
    //         navigate('/')
    //     }

    //     return function cleanup() {
    //         navigate(pathname, { replace: true })
    //     }7z
    // }, [state, pathname, navigate])

    // if (!state) {
    //     return null
    // }
    const { mutate: mutateCreateNotification } = useMutation({
        mutationFn: createNotification,
        onError: (err) => {
            toast.error(err.message)
        },
    })

    useEffect(() => {
        socket?.emit('sendFromFreelancerToEmployer', {
            senderId: user.id,
            receiverId: 'a68af9ff-7835-426e-b9e1-3c3dd081a40b',
            description: '',
            type: 8,
        })
        mutateCreateNotification({
            senderId: user.id,
            receiverId: 'a68af9ff-7835-426e-b9e1-3c3dd081a40b',
            description: '',
            type: 8,
        })
    }, [])

    return (
        <div className="relative h-full">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-4 p-28">
                <UilCheckCircle size="60" className="text-green-500" />
                <h1 className="font-bold">Thanh toán thành công</h1>
                <Link to="/employer-job">
                    <Button type="btn-primary rounded-xl">Trở về</Button>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutSuccess
