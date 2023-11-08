import Input from '../../common/Input'
import Label from '../../common/Label'
import Select from 'react-select'
import SelectFetching from '../../common/SelectFetching'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Button from '../../common/buttons/Button'
import { EXP, TypeProject } from '../../constants'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createJob } from '../../services/apiJob'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import { useContext, useState } from 'react'
import { UserContext } from '../user/userSlice'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function PostJob({ onCloseModal }) {
    const queryClient = useQueryClient()
    const { user } = useContext(UserContext)
    const [description, setDescription] = useState()
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { mutate, isLoading } = useMutation({
        mutationFn: createJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pending-jobs'] })
            reset()
            onCloseModal()
            toast.success('Công việc của bạn đã được tạo!')
        },
        onError: (err) => toast.error(err.message),
    })

    const onSubmit = (data) => {
        data.employerId = user.id
        data.description = description
        data.categoryId = data.category.value
        data.duration = (data.dateEnd - data.dateStart) / 86400000
        data.skills = data.skills?.map((skill) => skill.value)
        data.type = data.type?.label
        data.experience = data.experience?.label
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Tên công việc"
                register={register('name', { required: true })}
                error={errors.name}
            />

            {/* <TextArea
                label="Mô tả công việc"
                register={register('description', { required: true })}
                error={errors.description}
            /> */}

            <Label>Mô tả công việc</Label>
            <div className="my-4">
                <CKEditor
                    editor={ClassicEditor}
                    data={description}
                    // onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    //     console.log('Editor is ready to use!', editor)
                    // }}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setDescription(data)
                        // console.log({ event, editor, data })
                    }}
                    // onBlur={(event, editor) => {
                    //     console.log('Blur.', editor)
                    // }}
                    // onFocus={(event, editor) => {
                    //     console.log('Focus.', editor)
                    // }}
                />
            </div>

            <Input
                label="Ngân sách tối đa"
                register={register('maxBudget', { required: true })}
                error={errors.maxBudget}
            />

            <div>
                <Label>Hạn chào giá</Label>
                <Controller
                    control={control}
                    name="bidDeadline"
                    rules={{ required: true }}
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
            <div>
                <Label>Ngày bắt đầu</Label>
                <Controller
                    control={control}
                    name="dateStart"
                    rules={{ required: true }}
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
                    <p className="text-red-500">
                        Vui lòng chọn ngày bắt đầu dự án.
                    </p>
                )}
            </div>

            <div>
                <Label>Ngày kết thúc dự kiến</Label>
                <Controller
                    control={control}
                    name="dateEnd"
                    rules={{ required: true }}
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
                {errors.endStart && (
                    <p className="text-red-500">
                        Vui lòng chọn ngày dự kiến kết thúc dự án.
                    </p>
                )}
            </div>

            <Controller
                control={control}
                rules={{ required: true }}
                name="category"
                render={({ field: { onChange, value } }) => (
                    <SelectFetching
                        value={value}
                        onChange={onChange}
                        urlOptions="/category/all"
                        placeholder="Lĩnh vực"
                    />
                )}
            />
            {errors.category && (
                <p className="text-red-500">Vui lòng chọn lĩnh vực.</p>
            )}

            <Controller
                control={control}
                name="skills"
                render={({ field: { onChange, value } }) => (
                    <SelectFetching
                        value={value}
                        onChange={onChange}
                        urlOptions="/skill/all"
                        placeholder="Ngôn ngữ lập trình"
                        isMulti
                    />
                )}
            />

            <Controller
                control={control}
                name="experience"
                render={({ field: { onChange, value } }) => (
                    <Select
                        className="mt-4"
                        placeholder="Kinh nghiệm làm việc"
                        value={value}
                        onChange={onChange}
                        options={EXP}
                        isSearchable={false}
                    />
                )}
            />

            <Controller
                control={control}
                name="type"
                render={({ field: { onChange, value } }) => (
                    <Select
                        className="mt-4"
                        placeholder="Hình thức làm việc"
                        value={value}
                        onChange={onChange}
                        options={TypeProject}
                        isSearchable={false}
                    />
                )}
            />

            <div className="mt-4 flex justify-end gap-x-4">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy bỏ
                </Button>
                <Button type="btn-primary" className="rounded-xl">
                    {isLoading ? <Spinner /> : 'Đăng việc'}
                </Button>
            </div>
        </form>
    )
}

export default PostJob
