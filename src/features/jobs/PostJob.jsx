import 'react-datepicker/dist/react-datepicker.css'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createJob } from '../../services/apiJob'
import toast from 'react-hot-toast'
import { useContext, useState } from 'react'
import { UserContext } from '../user/userSlice'
import Input from '../../common/Input'
import Label from '../../common/Label'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DatePicker from 'react-datepicker'
import SelectFetching from '../../common/SelectFetching'
import Select from 'react-select'
import { EXP, TypeProject } from '../../constants'
import Button from '../../common/buttons/Button'
import Spinner from '../../ui/Spinner'
import { addDays } from 'date-fns'

function PostJob({ onCloseModal }) {
    const queryClient = useQueryClient()
    const { user } = useContext(UserContext)
    const [description, setDescription] = useState()
    const [bidDeadline, setBidDeadline] = useState()
    const [dateStart, setDateStart] = useState()
    const [dateEnd, setDateEnd] = useState()
    const [selectedBidDeadline, setSelectedBidDeadline] = useState(false)
    const [selectedDateStart, setSelectedDateStart] = useState(false)
    const [selectedDateEnd, setSelectedDateEnd] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
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
        setIsSubmit(true)
        if (!selectedBidDeadline || !selectedDateStart || !selectedDateEnd)
            return
        data.description = description
        data.bidDeadline = bidDeadline
        data.dateStart = dateStart
        data.categoryId = data.category.value
        data.duration = (dateEnd - dateStart) / 86400000
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

            <Label>Mô tả công việc</Label>
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

            <Input
                label="Ngân sách tối đa"
                register={register('maxBudget', { required: true })}
                error={errors.maxBudget}
            />

            <div>
                <Label>Hạn chào giá</Label>
                <span className="rounded border-2 border-stone-500 p-1 focus-within:border-none">
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        wrapperClassName="border-none mt-4"
                        selected={bidDeadline}
                        onChange={(date) => {
                            setBidDeadline(date)
                            setSelectedBidDeadline(true)
                        }}
                    />
                </span>
                {!selectedBidDeadline && isSubmit && (
                    <p className="text-red-500">Vui lòng chọn ngày.</p>
                )}
                {/* <Controller
                    control={control}
                    name="bidDeadline"
                    rules={{
                        required: true,
                        validate: (v) => {
                            return v >= new Date()
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <span className="rounded border-2 border-stone-500 p-1 focus-within:border-none">
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                wrapperClassName="border-none mt-4"
                                selected={value}
                                onChange={onChange}
                            />
                        </span>
                    )}
                />
                {errors.bidDeadline && (
                    <p className="text-red-500">Vui lòng chọn ngày phù hợp.</p>
                )} */}
            </div>
            <div>
                <Label>Ngày bắt đầu</Label>
                <span className="rounded border-2 border-stone-500 p-1 focus-within:border-none">
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        disabled={!bidDeadline}
                        minDate={addDays(bidDeadline, 1)}
                        wrapperClassName="border-none mt-4"
                        selected={dateStart}
                        onChange={(date) => {
                            setDateStart(date)
                            setSelectedDateStart(true)
                        }}
                    />
                </span>
                {!selectedDateStart && isSubmit && (
                    <p className="text-red-500">Vui lòng chọn ngày.</p>
                )}
                {/* <Controller
                    control={control}
                    name="dateStart"
                    rules={{
                        required: true,
                        validate: (v, values) => v >= values.bidDeadline,
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
                    <p className="text-red-500">Vui lòng chọn ngày phù hợp.</p>
                )} */}
            </div>

            <div>
                <Label>Ngày kết thúc dự kiến</Label>
                <span className="rounded border-2 border-stone-500 p-1 focus-within:border-none">
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        wrapperClassName="border-none mt-4"
                        disabled={!dateStart}
                        minDate={addDays(dateStart, 1)}
                        selected={dateEnd}
                        onChange={(date) => {
                            setDateEnd(date)
                            setSelectedDateEnd(true)
                        }}
                    />
                </span>
                {!selectedDateEnd && isSubmit && (
                    <p className="text-red-500">Vui lòng chọn ngày.</p>
                )}
                {/* <Controller
                    control={control}
                    name="dateEnd"
                    rules={{
                        required: true,
                        validate: (v, values) => v >= values.dateStart,
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
                {errors.dateEnd && (
                    <p className="text-red-500">Vui lòng chọn ngày phù hợp.</p>
                )} */}
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
