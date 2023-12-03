import { useQuery } from '@tanstack/react-query'
import { getDetailJob } from '../../services/apiJob'
import { Controller, useForm } from 'react-hook-form'
import Spinner from '../../ui/Spinner'
import { useState } from 'react'
import Input from '../../common/Input'
import Label from '../../common/Label'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import DatePicker from 'react-datepicker'
import SelectFetching from '../../common/SelectFetching'
import Select from 'react-select'
import { EXP, TypeProject } from '../../constants'
import Button from '../../common/buttons/Button'
import formatDatePicker from '../../utils/formatDatePicker'

function UpdatePendingJob({ onCloseModal, jobId }) {
    const [description, setDescription] = useState()
    const {
        register,
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { isLoading } = useQuery({
        queryKey: ['get-edit-pending-job', jobId],
        queryFn: () => getDetailJob(jobId),
        onSuccess: (data) => {
            const date = new Date(data.dateStart).setDate(
                new Date(data.dateStart).getDate() + data.duration
            )

            reset({
                name: data.name,
                maxBudget: data.maxBudget,
                bidDeadline: formatDatePicker(data.bidDeadline),
                dateStart: formatDatePicker(data.dateStart),
                dateEnd: formatDatePicker(date),
                // category: data.category,
                // skills: data.skills,
                // experience: data.experience,
                // type: data.type,
            })
            setDescription(data.description)
        },
    })

    if (isLoading) return <Spinner />

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
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

export default UpdatePendingJob
