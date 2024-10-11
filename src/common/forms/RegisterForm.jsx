import Button from '../buttons/Button';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthServices from '../../services/auth.services';

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [, , handleContinue] = useOutletContext();

    const submitAndVerifyEmail = async (data) => {
        try {
            const { message } = await AuthServices.sendVerificationEmail(data);
            toast.success(message);
            handleContinue(data);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(submitAndVerifyEmail)}>
            <Input
                label="Email"
                type="text"
                register={register('email', {
                    required: true,
                    pattern:
                        /^[A-Za-z0-9_!#$%&'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm,
                })}
                error={errors.email}
            />

            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Tiếp tục
            </Button>
        </form>
    );
}

export default RegisterForm;
