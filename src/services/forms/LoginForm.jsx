import { useState } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../ui/Input'

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if (!email || !password) return
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <Button className="mt-4 mx-auto rounded-xl" type="btn-primary">
                Đăng nhập
            </Button>
        </form>
    )
}

export default LoginForm
