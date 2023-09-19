import { useState } from 'react'
import Button from '../buttons/Button'
import Input from '../Input'
import { Link } from 'react-router-dom'

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

            <Link className="py-2 hover:text-primary hover:underline" to="/">
                Quên mật khẩu?
            </Link>

            <Button className="mt-4 mx-auto rounded-xl" type="btn-primary">
                Đăng nhập
            </Button>
        </form>
    )
}

export default LoginForm
