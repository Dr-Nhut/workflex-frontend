import Button from '../buttons/Button'
import Input from '../Input'
import FreelancerInfor from '../../ui/FreelancerInfor'
import { useForm } from 'react-hook-form'

function InfoFreelancerForm({ role, userInfor, handleUserInfor }) {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    return (
        <form
            onSubmit={handleSubmit((data) => {
                data.categories = data.categories.map(
                    (category) => category.value
                )
                data.skills = data.skills.map((skill) => skill.value)

                console.log(data)
            })}
        >
            <Input
                label="Địa chỉ"
                type="text"
                register={register('address', { required: true })}
                errors={errors.address}
            />
            {role === 'fre' && (
                <FreelancerInfor control={control} errors={errors} />
            )}
            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Xác nhận
            </Button>
        </form>
    )
}

export default InfoFreelancerForm
