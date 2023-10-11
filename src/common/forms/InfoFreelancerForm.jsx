import Button from '../buttons/Button'
import Input from '../Input'
import FreelancerInfor from '../../ui/FreelancerInfor'
import { Controller, useForm } from 'react-hook-form'
import { URL_SERVER } from '../../constants'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import formatKeyObject from '../../utils/formatKeyObject'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

function InfoFreelancerForm({ userInfor }) {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    const { role } = userInfor
    const {
        register,
        watch,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    useEffect(() => {
        axios
            .get(`${URL_SERVER}/category/all`)
            .then((res) => {
                const cateFormatted = formatKeyObject(res.data, [
                    { old: 'id', new: 'value' },
                    { old: 'name', new: 'label' },
                ])
                setCategories(cateFormatted)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const registerUser = (data) => {
        data.categories = data.categories.map((category) => category.value)
        data.skills = data.skills?.map((skill) => skill.value)
        axios
            .post(`${URL_SERVER}/auth/register`, { ...userInfor, ...data })
            .then((response) => {
                toast.success(response.data.message)
                setTimeout(() => {
                    navigate('/login')
                }, 1000)
            })
            .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
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

            <Controller
                control={control}
                name="categories"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <Select
                        className="mt-4"
                        // defaultValue={selectedOption}
                        value={value}
                        onChange={onChange}
                        placeholder="Lĩnh vực"
                        options={categories}
                        isMulti
                    />
                )}
            />
            {errors.categories && (
                <p className="text-red-500">Vui lòng chọn lĩnh vực của bạn.</p>
            )}
            {role === 'fre' && (
                <FreelancerInfor control={control} errors={errors} />
            )}
            <Button className="mx-auto mt-4 rounded-xl" type="btn-primary">
                Xác nhận
            </Button>
            <Toaster />
        </form>
    )
}

export default InfoFreelancerForm
