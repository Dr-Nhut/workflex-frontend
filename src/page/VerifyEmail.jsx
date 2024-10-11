import { useState, useEffect } from 'react';
import {
    useNavigate,
    useOutletContext,
    useSearchParams,
} from 'react-router-dom';
import axios from 'axios';
import { UilCheckCircle, UilTimesCircle } from '@iconscout/react-unicons';
import Spinner from '../ui/Spinner';
import Button from '../common/buttons/Button';
import AuthServices from '../services/auth.services';
import toast from 'react-hot-toast';

function VerifyEmail() {
    const [status, setStatus] = useState('loading');
    const [, , handleContinue] = useOutletContext();

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const email = searchParams.get('email');
    const token = searchParams.get('token');

    const handleVerifyEmail = async () => {
        try {
            const response = await AuthServices.verifyEmail({ email, token });

            setStatus('success');
            handleContinue(
                {
                    email,
                    emailVerifiedAt: response.emailVerifiedAt,
                },
                2
            );
            navigate('/register');
        } catch (err) {
            toast.error(err.message);
        }
    };

    useEffect(() => {
        handleVerifyEmail();
        // axios
        //     .get(`/auth/verify?email=${email}&token=${token}`)
        //     .then((response) => {
        //         if (response.status === 200) {
        //             setStatus(response.data.status);
        //             handleContinue(
        //                 {
        //                     email,
        //                     emailVerifiedAt: response.data.emailVerifiedAt,
        //                 },
        //                 2
        //             );
        //             navigate('/register');
        //         } else {
        //             setStatus('fail');
        //         }
        //     })
        //     .catch(() => setStatus('fail'));
    }, [email, token, navigate, handleContinue]);

    return (
        <div className="mt-8 flex justify-center">
            {status === 'loading' && <Spinner />}
            {status === 'success' && (
                <span className="text-xl text-stone-500">
                    <UilCheckCircle
                        size="48"
                        className="mx-auto mb-4 text-green-500"
                    />
                    Xác thực thành công
                </span>
            )}
            {status === 'fail' && (
                <div>
                    <span className="text-xl text-stone-500">
                        <UilTimesCircle
                            size="48"
                            className="mx-auto mb-4 text-red-500"
                        />
                        Xác thực thất bại
                    </span>
                    <Button
                        type="btn-primary"
                        className="mx-auto mt-4 rounded-xl"
                    >
                        Gửi lại email
                    </Button>
                </div>
            )}
        </div>
    );
}

export default VerifyEmail;
