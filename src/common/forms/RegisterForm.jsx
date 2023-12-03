// import { useState } from 'react'
import axios from 'axios'
import Button from '../buttons/Button'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import { URL_SERVER } from '../../constants'
import { useOutletContext } from 'react-router-dom'
import toast from 'react-hot-toast'

function RegisterForm() {
    const [userInfor, step, handleContinue] = useOutletContext()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const submitAndVerifyEmail = (data) => {
        axios
            .post(`${URL_SERVER}/auth/send-email-verify`, data)
            .then((response) => {
                console.log(response)
                if (response.status === 200) handleContinue(data)
            })
            .catch((err) => toast.error(err.response.data.message))
    }

    return (
        <form onSubmit={handleSubmit(submitAndVerifyEmail)}>
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

            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Tiếp tục
            </Button>
        </form>
    )
}

export default RegisterForm
