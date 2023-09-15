import { Link } from 'react-router-dom'
import LoginForm from '../services/forms/LoginForm'

function Login() {
    return (
        <div className="h-screen py-20 bg-slate-100">
            <div className="mx-auto w-1/3 px-10 py-8 rounded-xl bg-slate-50 shadow-xl shadow-stone-400">
                <header className="text-center">
                    <h2 className="pb-2 text-primary font-bold text-4xl">
                        Work Flex
                    </h2>
                    <h4 className="p-2 text-xl text-stone-500">
                        Chào mừng bạn trở lại
                    </h4>
                </header>
                <main className="mt-8 mb-4">
                    <LoginForm />
                </main>
                <footer className="flex justify-between flex-wrap">
                    <Link
                        className="py-2 hover:text-primary hover:underline"
                        to="/"
                    >
                        Quên mật khẩu?
                    </Link>
                    <Link
                        className="py-2 hover:text-primary hover:underline"
                        to="/"
                    >
                        Đăng ký tài khoản &#8594;
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default Login
