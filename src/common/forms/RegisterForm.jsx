import { useState } from 'react'
import Button from '../buttons/Button'
import Input from '../Input'

function RegisterForm({ onContinue }) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!fullName || !email || !password || !confirmPassword) return
        onContinue((step) => step + 1)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Họ và tên"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <Input
                label="Email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Input
                label="Mật khẩu"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Input
                label="Xác nhận mật khẩu"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Tiếp tục
            </Button>
        </form>
    )
}

export default RegisterForm
