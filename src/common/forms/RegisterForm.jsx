// import { useState } from 'react'
import Button from '../buttons/Button'
import Input from '../Input'
import { useForm } from 'react-hook-form'

function RegisterForm({ onContinue }) {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // const [fullName, setFullName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmPassword, setConfirmPassword] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     if (!fullName || !email || !password || !confirmPassword) return
    //     onContinue((step) => step + 1)
    // }
    return (
        <form onSubmit={handleSubmit((data) => onContinue(data))}>
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
