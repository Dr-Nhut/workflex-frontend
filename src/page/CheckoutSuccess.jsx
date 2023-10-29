import { Link } from 'react-router-dom'
import { UilCheckCircle } from '@iconscout/react-unicons'
import Button from '../common/buttons/Button'

function CheckoutSuccess() {
    // const { state, pathname } = useLocation()
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!state) {
    //         navigate('/')
    //     }

    //     return function cleanup() {
    //         navigate(pathname, { replace: true })
    //     }
    // }, [state, pathname, navigate])

    // if (!state) {
    //     return null
    // }

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
