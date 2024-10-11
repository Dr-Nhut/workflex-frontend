import Button from '../buttons/Button';
import Input from '../Input';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../../features/user/userSlice';
import Cookies from 'js-cookie';
import AuthServices from '../../services/auth.services';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const { dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleLogin(data) {
        try {
            const { metadata } = await AuthServices.login(data);
            dispatch({ type: 'users/login', payload: metadata.tokens });
            Cookies.set('token', metadata.tokens.accessToken, {
                expires: 7,
            });
            Cookies.set('userId', metadata.id, {
                expires: 7,
            });
            navigate('/');
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Input
                label="Email"
                type="text"
                register={register('email', { required: true })}
                error={errors.email}
            />

            <Input
                label="Mật khẩu"
                type="password"
                register={register('password', { required: true })}
                error={errors.password}
            />

            <Link className="py-2 hover:text-primary hover:underline" to="/">
                Quên mật khẩu?
            </Link>

            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Đăng nhập
            </Button>
            <Toaster />
        </form>
    );
}

export default LoginForm;
