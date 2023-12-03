import axios from 'axios'
import Button from '../../common/buttons/Button'
import { URL_SERVER } from '../../constants'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import Spinner from '../../ui/Spinner'

function Verify() {
    const [userInfor, step, handleContinue] = useOutletContext()
    const [isLoading, setIsLoading] = useState()
    const handleOnClick = () => {
        setIsLoading('loading')
        axios
            .post(`${URL_SERVER}/auth/send-email-verify`, userInfor)
            .then((response) => {
                if (response.status === 200) setIsLoading('success')
                // else display error
            })
            .catch((err) => console.error(err))
    }

    return (
        <>
            <h4 className="text-center font-semibold">Xác thực Email</h4>
            <p className="my-4 px-4 text-justify text-stone-500">
                Thông tin xác thực đã gửi đến email của bạn, vui lòng xác thực
                email để tiếp tục thực hiện đăng ký
            </p>
            <Button
                type="btn-primary"
                className="mx-auto rounded-xl"
                onClick={handleOnClick}
            >
                {isLoading === 'loading' ? <Spinner size="small" /> : 'Gửi lại'}
            </Button>
        </>
    )
}

export default Verify
