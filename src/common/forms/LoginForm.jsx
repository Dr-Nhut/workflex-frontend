import Button from '../buttons/Button'
import Input from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { URL_SERVER } from '../../constants'
import toast, { Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import { UserContext } from '../../features/user/userSlice'
import Cookies from 'js-cookie'

function LoginForm() {
    const { dispatch } = useContext(UserContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function handleLogin(data) {
        axios
            .post(`${URL_SERVER}/auth/login`, data)
            .then((response) => {
                const { user, status, message, token } = response.data
                if (status !== 'success') toast[status](message)
                else {
                    dispatch({ type: 'users/login', payload: user })
                    Cookies.set('token', token, { expires: 365 })

                    if (user.role === 'adm') {
                        navigate('/admin/job-pending')
                    } else navigate('/dashboard')
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Input
                label="Email"
                type="text"
                register={register('email', { required: true })}
                error={errors.email}
            />

            <Input
                label="Mật khẩu"
                type="password"
                register={register('password', { required: true })}
                error={errors.password}
            />

            <Link className="py-2 hover:text-primary hover:underline" to="/">
                Quên mật khẩu?
            </Link>

            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Đăng nhập
            </Button>
            <Toaster />
        </form>
    )
}

export default LoginForm
