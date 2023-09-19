import { useNavigate } from 'react-router-dom'
import Button from '../common/buttons/Button'
import { UilSignin, UilEdit } from '@iconscout/react-unicons'

function Account() {
    const navigate = useNavigate()
    return (
        <div className="flex justify-around gap-4">
            <Button
                type="btn-primary rounded-xl"
                icon={<UilSignin size="24" />}
                onClick={() => navigate('login')}
            >
                Log in
            </Button>
            <Button
                type="btn-outline rounded-xl"
                icon={<UilEdit size="24" />}
                onClick={() => navigate('register')}
            >
                Sign Up
            </Button>
        </div>
    )
}

export default Account
