import Input from '../../common/Input'
import Label from '../../common/Label'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../../common/buttons/Button'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from '../../services/apiTask'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import { useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { createNotification } from '../../services/apiNotification'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'

function PostTask({
    onCloseModal,
    contractId,
    employerId,
    dateStartProject,
    dateEndProject,
}) {
    const { user, socket } = useContext(UserContext)
    const queryClient = useQueryClient()
    const [description, setDescription] = useState()
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { mutate: mutateCreateNotification } = useMutation({
        mutationFn: createNotification,
        onError: (err) => {
            toast.error(err.message)
        },
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: createTask,
        onSuccess: (response) => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] })
            reset()
            onCloseModal()
            socket.emit('sendFromFreelancerToEmployer', {
                senderId: user.id,
                receiverId: employerId,
                description: response.name,
                type: 7,
            })
            mutateCreateNotification({
                senderId: user.id,
                receiverId: employerId,
                description: response.name,
                type: 7,
            })
            toast.success('Nhiệm vụ đã được tạo!')
        },
        onError: (err) => toast.error(err.message),
    })

    const onSubmit = (data) => {
        data.description = description
        data.contractId = contractId
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Tên nhiệm vụ"
                register={register('name', { required: true })}
                error={errors.name}
            />

            <Label>Mô tả nhiệm vụ</Label>
            <div className="my-4">
                <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setDescription(data)
                    }}
                />
            </div>

            <div>
                <Label>Ngày bắt đầu</Label>
                <Controller
                    control={control}
                    name="dateStart"
                    rules={{
                        required: true,
                        validate: (v) => v >= new Date(dateStartProject),
                    }}
                    render={({ field: { onChange, value } }) => (
                        <span className="rounded border-2 border-stone-500 p-1 focus-within:border-none">
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                wrapperClassName="border-none mt-4"
                                selected={value}
                                onChange={onChange}
                            />
                        </span>
                    )}
                />
                {errors.dateStart && (
                    <p className="text-red-500">Vui lòng chọn ngày hợp lệ.</p>
                )}
            </div>

            <div>
                <div className="inline pr-9">
                    <Label>Thời hạn</Label>
                </div>
                <Controller
                    control={control}
                    name="dateEnd"
                    rules={{
                        required: true,
                        validate: (v) => v <= new Date(dateEndProject),
                    }}
                    render={({ field: { onChange, value } }) => (
                        <span className="rounded border-2 border-stone-500 p-1 focus-within:border-none">
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                wrapperClassName="border-none mt-4"
                                selected={value}
                                onChange={onChange}
                            />
                        </span>
                    )}
                />
                {errors.categories && (
                    <p className="text-red-500">Bạn chưa điền thông tin.</p>
                )}
            </div>

            <div className="mt-4 flex justify-end gap-x-4">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy bỏ
                </Button>
                <Button type="btn-primary" className="rounded-xl">
                    {isLoading ? <Spinner /> : 'Thêm nhiệm vụ'}
                </Button>
            </div>
        </form>
    )
}

export default PostTask
