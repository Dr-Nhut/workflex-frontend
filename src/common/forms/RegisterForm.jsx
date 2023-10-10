// import { useState } from 'react'
import axios from 'axios'
import Button from '../buttons/Button'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import { URL_SERVER } from '../../constants'

function RegisterForm({ onContinue }) {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const submitAndVerifyEmail = (data) => {
        console.log(data)
        axios
            .post(`${URL_SERVER}/auth/send-email-verify`, data)
            .then((response) => {
                if (response.status === 200) onContinue((step) => step + 1)
                // else display error
            })
            .catch((err) => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit(submitAndVerifyEmail)}>
            <Input
                label="Họ và tên"
                type="text"
                register={register('fullname', { required: true })}
                error={errors.fullname}
            />

            <Input
                label="Email"
                type="text"
                register={register('email', {
                    required: true,
                    pattern:
                        /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                })}
                error={errors.email}
            />

            <Input
                label="Mật khẩu"
                type="password"
                register={register('password', {
                    minLength: 8,
                    maxLength: 16,
                })}
                error={errors.password}
                messageError="Mật khẩu phải từ 8 đến 16 ký tự"
            />

            <Input
                label="Xác nhận mật khẩu"
                type="password"
                register={register('confirmPassword', {
                    required: true,
                    validate: (pass) => {
                        if (watch('password') != pass) {
                            return 'Mật khẩu không khớp'
                        }
                    },
                })}
                error={errors.confirmPassword}
            />

            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Tiếp tục
            </Button>
        </form>
    )
}

export default RegisterForm
