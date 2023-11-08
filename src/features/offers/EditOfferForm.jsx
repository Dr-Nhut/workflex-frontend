import { Controller, useForm } from 'react-hook-form'
import Input from '../../common/Input'
import Label from '../../common/Label'
import DatePicker from 'react-datepicker'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Button from '../../common/buttons/Button'
import Spinner from '../../ui/Spinner'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getDetailJob } from '../../services/apiJob'
import { useContext, useState } from 'react'
import { updateOffer } from '../../services/apiOffer'
import toast from 'react-hot-toast'
import { UserContext } from '../user/userSlice'

function EditOfferForm({ onCloseModal, offer }) {
    const { user } = useContext(UserContext)
    const queryClient = useQueryClient()
    const [description, setDescription] = useState(offer.description)
    const [plan, setPlan] = useState(offer.plan)
    const {
        register,
        control,
        // reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { isLoading, mutate } = useMutation({
        mutationFn: updateOffer,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['offersByFreelancer', user.id],
            })
            toast.success('Bạn đã chỉnh sửa chào giá thành công.')
            onCloseModal()
        },
    })

    const { isLoading: loadingJobDetail, data: jobDetail } = useQuery({
        queryKey: ['jobDetail', offer.jobId],
        queryFn: () => getDetailJob(offer.jobId),
    })

    const onSubmit = (data) => {
        data.description = description
        data.plan = plan
        mutate({ id: offer.id, payload: data })
    }

    if (loadingJobDetail) return null

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                haft
                label="Chi phí"
                placeholder="9000000"
                register={register('price', {
                    value: offer.price,
                    required: true,
                    pattern: /^[0-9]+$/,
                })}
                error={errors.price}
                messageError="Giá trị không hợp lệ. Hãy nhập số tiền bạn muốn được trả sau khi hoàn thành dự án, ví dụ: '9000000'."
            />

            <div>
                <Label>Thời gian hoàn thành dự kiến</Label>
                <Controller
                    control={control}
                    name="dateEnd"
                    defaultValue={new Date(offer.dateEnd)}
                    rules={{
                        required: true,
                        validate: (value) => {
                            return (
                                (new Date(value) -
                                    new Date(jobDetail.dateStart)) /
                                    86400000 <=
                                    jobDetail.duration &&
                                (new Date(value) -
                                    new Date(jobDetail.dateStart)) /
                                    86400000 >
                                    0
                            )
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            wrapperClassName="border-none mt-4"
                            selected={value}
                            onChange={onChange}
                        />
                    )}
                />
                {errors.dateEnd && (
                    <p className="text-red-500">Thông tin không hợp lệ.</p>
                )}
            </div>

            <Label>
                Mô tả những điểm mạnh và kinh nghiệm của bạn đối với công việc
                này
            </Label>
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

            <Label>Kế hoạch thực hiện dự án</Label>
            <div className="my-4">
                <CKEditor
                    editor={ClassicEditor}
                    data={plan}
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setPlan(data)
                    }}
                />
            </div>

            <div className="flex justify-end gap-x-2">
                <Button type="btn-text" onClick={onCloseModal}>
                    Hủy
                </Button>
                <Button type="btn-primary rounded-xl">
                    {isLoading ? <Spinner /> : 'Chỉnh sửa chào giá'}
                </Button>
            </div>
        </form>
    )
}

export default EditOfferForm
