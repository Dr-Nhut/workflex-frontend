import { useState, useEffect } from 'react'
import {
    redirect,
    useNavigate,
    useOutletContext,
    useSearchParams,
} from 'react-router-dom'
import axios from 'axios'
import { UilCheckCircle, UilTimesCircle } from '@iconscout/react-unicons'

import { URL_SERVER } from '../constants'

import Spinner from '../ui/Spinner'
import Button from '../common/buttons/Button'

function VerifyEmail() {
    const [status, setStatus] = useState('loading')
    const [userInfor, step, handleContinue] = useOutletContext()

    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const email = searchParams.get('email')
    const token = searchParams.get('token')

    useEffect(() => {
        axios
            .get(`${URL_SERVER}/auth/verify?email=${email}&token=${token}`)
            .then((response) => {
                if (response.status === 200) {
                    setStatus(response.data.status)
                    handleContinue({ email }, 2)
                    navigate('/register')
                } else {
                    setStatus('fail')
                }
            })
            .catch(() => setStatus('fail'))
    }, [email, token])

    return (
        <div className="mt-8 flex justify-center">
            {status === 'loading' && <Spinner />}
            {status === 'success' && (
                <span className="text-xl text-stone-500">
                    <UilCheckCircle
                        size="48"
                        className="mx-auto mb-4 text-green-500"
                    />
                    Xác thực thành công
                </span>
            )}
            {status === 'fail' && (
                <div>
                    <span className="text-xl text-stone-500">
                        <UilTimesCircle
                            size="48"
                            className="mx-auto mb-4 text-red-500"
                        />
                        Xác thực thất bại
                    </span>
                    <Button
                        type="btn-primary"
                        className="mx-auto mt-4 rounded-xl"
                    >
                        Gửi lại email
                    </Button>
                </div>
            )}
        </div>
    )
}

export default VerifyEmail
