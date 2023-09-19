import { Link } from 'react-router-dom'
import LoginForm from '../common/forms/LoginForm'

function Login() {
    return (
        <div className="h-screen bg-slate-100 py-20">
            <div className="mx-auto w-1/3 rounded-xl bg-slate-50 px-10 py-8 shadow-xl shadow-stone-400">
                <header className="text-center">
                    <h2 className="pb-2 text-4xl font-bold text-primary">
                        Work Flex
                    </h2>
                    <h4 className="p-2 text-xl text-stone-500">
                        Chào mừng bạn trở lại
                    </h4>
                </header>
                <main className="mb-4 mt-8">
                    <LoginForm />
                </main>
                <footer className="flex flex-wrap justify-between">
                    <Link
                        className="py-2 hover:text-primary hover:underline"
                        to="/"
                    >
                        &#8592; Trang chủ
                    </Link>
                    <Link
                        className="py-2 hover:text-primary hover:underline"
                        to="/register"
                    >
                        Đăng ký tài khoản &#8594;
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default Login
