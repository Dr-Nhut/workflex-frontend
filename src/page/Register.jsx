// import { Link } from 'react-router-dom'
import RegisterForm from '../common/forms/RegisterForm'
// import { useState } from 'react'
import SelectTypeAccount from '../features/auth/SelectTypeAccount'
import InfoFreelancerForm from '../common/forms/InfoFreelancerForm'
import Verify from '../features/auth/Verify'
import { useOutletContext } from 'react-router-dom'

function Register() {
    const [userInfor, step, handleContinue] = useOutletContext()

    return (
        <>
            {step === 0 && <RegisterForm />}
            {step == 1 && <Verify />}
            {step === 2 && <SelectTypeAccount onContinue={handleContinue} />}
            {step === 3 && <InfoFreelancerForm userInfor={userInfor} />}
        </>
    )
}

export default Register
