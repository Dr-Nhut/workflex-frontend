import Button from '../buttons/Button'
import Input from '../Input'
import FreelancerInfor from '../../ui/FreelancerInfor'
import { Controller, useForm } from 'react-hook-form'
import { URL_SERVER } from '../../constants'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import SelectFetching from '../SelectFetching'
import Select from 'react-select'

function InfoFreelancerForm({ userInfor }) {
    const navigate = useNavigate()
    const { role } = userInfor
    const {
        register,
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const registerUser = (data) => {
        data.categories = data.categories.map((category) => category.value)
        data.sex = data.sex.value
        data.skills = data.skills?.map((skill) => skill.value)
        data?.experiece ? (data.experience = data?.experience.value) : ''
        axios
            .post(`${URL_SERVER}/v2/auth/`, { ...userInfor, ...data })
            .then(() => {
                toast.success('Đăng ký tài khoản thành công')
                navigate('/login')
            })
            .catch((err) => toast.error(err.response.data.message))
    }

    return (
        <form
            onSubmit={handleSubmit(registerUser)}
            className="h-[400px] w-full overflow-auto px-2"
        >
            <Input
                label="Họ và tên"
                type="text"
                register={register('fullname', { required: true })}
                error={errors.fullname}
            />
            <Input
                label="Mật khẩu"
                type="password"
                register={register('password', {
                    minLength: 8,
                    maxLength: 16,
                })}
                error={errors.password}
                messageError="Mật khẩu phải từ 8 đến 16 ký tự"
            />
            <Input
                label="Xác nhận mật khẩu"
                type="password"
                register={register('confirmPassword', {
                    required: true,
                    validate: (pass) => {
                        if (watch('password') != pass) {
                            return 'Mật khẩu không khớp'
                        }
                    },
                })}
                error={errors.confirmPassword}
            />

            <Input
                label="Địa chỉ"
                type="text"
                register={register('address', { required: true })}
                errors={errors.address}
            />

            <Input
                label="Số điện thoại"
                type="phone"
                register={register('phone', {
                    required: true,
                    pattern: /^[0-9]+$/,
                })}
                error={errors.phone}
            />

            <Input
                label="Số tài khoản"
                type="bank_account"
                register={register('bank_account', {
                    required: true,
                    pattern: /^[0-9]+$/,
                })}
                error={errors.bank_account}
            />

            <Controller
                control={control}
                name="sex"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <Select
                        className="mt-4"
                        // defaultValue={selectedOption}
                        value={value}
                        onChange={onChange}
                        placeholder="Giới tính"
                        options={[
                            { value: 1, label: 'Nam' },
                            { value: 0, label: 'Nữ' },
                        ]}
                        isSearchable={false}
                    />
                )}
            />
            {errors.sex && (
                <p className="text-red-500">Vui lòng điền thông tin.</p>
            )}

            <Controller
                control={control}
                name="categories"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <SelectFetching
                        className="mt-4"
                        // defaultValue={selectedOption}
                        value={value}
                        onChange={onChange}
                        placeholder="Lĩnh vực"
                        urlOptions={'/v2/category'}
                        isMulti
                    />
                )}
            />
            {errors.categories && (
                <p className="text-red-500">Vui lòng chọn lĩnh vực của bạn.</p>
            )}

            {role === '0da3b491-bb4a-4a4c-808c-6658ef7a1219' && (
                <>
                    <FreelancerInfor control={control} errors={errors} />
                </>
            )}
            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Xác nhận
            </Button>
            <Toaster />
        </form>
    )
}

export default InfoFreelancerForm
