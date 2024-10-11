import Button from '../../common/buttons/Button';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import Spinner from '../../ui/Spinner';
import AuthServices from '../../services/auth.services';
import toast from 'react-hot-toast';

function Verify() {
    // const [userInfor, step, handleContinue] = useOutletContext();
    const [userInfor] = useOutletContext();
    const [isLoading, setIsLoading] = useState();
    const handleOnClick = async () => {
        setIsLoading('loading');
        try {
            const { message } = await AuthServices.sendVerificationEmail(
                userInfor
            );
            setIsLoading('success');
            toast.success(message);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <>
            <h4 className="text-center font-semibold">Xác thực Email</h4>
            <p className="my-4 px-4 text-justify text-stone-500">
                Thông tin xác thực đã gửi đến email của bạn, vui lòng xác thực
                email để tiếp tục thực hiện đăng ký
            </p>
            <Button
                type="btn-primary"
                className="mx-auto rounded-xl"
                onClick={handleOnClick}
            >
                {isLoading === 'loading' ? <Spinner size="small" /> : 'Gửi lại'}
            </Button>
        </>
    );
}

export default Verify;
