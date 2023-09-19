import { Link } from 'react-router-dom'
import RegisterForm from '../common/forms/RegisterForm'
import { useState } from 'react'
import SelectTypeAccount from '../features/auth/SelectTypeAccount'
import InfoFreelancerForm from '../common/forms/InfoFreelancerForm'

function Register() {
    const [step, setStep] = useState(0)
    const [typeAccount, setTypeAccount] = useState('client')

    return (
        <div className="h-screen bg-slate-100 py-20">
            <div className="mx-auto w-1/3 rounded-xl bg-slate-50 px-10 py-8 shadow-xl shadow-stone-400">
                <header className="text-center">
                    <h2 className="pb-2 text-4xl font-bold text-primary">
                        Work Flex
                    </h2>
                    {step < 2 && (
                        <h4 className="p-2 text-xl text-stone-500">
                            Chào mừng bạn trở thành thành viên tiếp theo của
                            Work Flex
                        </h4>
                    )}
                </header>
                <main className="mb-4 mt-8">
                    {step === 0 && <RegisterForm onContinue={setStep} />}
                    {step === 1 && (
                        <SelectTypeAccount
                            typeAccount={typeAccount}
                            onSelected={setTypeAccount}
                            onContinue={setStep}
                        />
                    )}
                    {step === 2 && <InfoFreelancerForm />}
                </main>
                <footer className="flex justify-between">
                    <Link
                        className="py-2 hover:text-primary hover:underline"
                        to="/"
                    >
                        &#8592; Trang chủ
                    </Link>
                    <Link
                        className="py-2 hover:text-primary hover:underline"
                        to="/login"
                    >
                        Đã có tài khoản, đăng nhập ngay &#8594;
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default Register
