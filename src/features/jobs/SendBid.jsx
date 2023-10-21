import TitleSection from '../../ui/TitleSection'
import Input from '../../common/Input'
import { Controller, useForm } from 'react-hook-form'
import Label from '../../common/Label'
import DatePicker from 'react-datepicker'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useContext, useState } from 'react'
import Button from '../../common/buttons/Button'
import { useParams } from 'react-router-dom'
import { UserContext } from '../user/userSlice'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getOffersForJob, postOffer } from '../../services/apiOffer'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import checkBid from '../../utils/checkBidded'

function SendBid() {
    const queryClient = useQueryClient()
    const jobId = useParams().id
    const { user } = useContext(UserContext)
    const [description, setDescription] = useState()
    const [plan, setPlan] = useState()

    const {
        register,
        control,
        // reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const {
        isLoading: isLoadingOffer,
        data: offers,
        // error,
    } = useQuery({
        queryKey: ['offersForJob'],
        queryFn: () => getOffersForJob(jobId),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: postOffer,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['offersForJob'] })
            toast.success('Gửi báo giá thành công!')
        },
        onError: (err) => toast.error(err.message),
    })

    const onSubmit = (data) => {
        data.description = description
        data.plan = plan
        data.jobId = jobId
        data.freelancerId = user.id
        mutate(data)
    }

    if (isLoadingOffer) return <Spinner />

    return (
        <div className="mt-4 w-4/5 bg-stone-50 px-8 py-8">
            <TitleSection>Thông tin chào giá</TitleSection>

            {!checkBid(user.id, offers) ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        haft
                        label="Chi phí"
                        placeholder="9000000"
                        register={register('price', {
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
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    wrapperClassName="border-none mt-4"
                                    selected={value}
                                    onChange={onChange}
                                />
                            )}
                        />
                        {errors.dataEnd && (
                            <p className="text-red-500">
                                Bạn chưa điền thông tin.
                            </p>
                        )}
                    </div>

                    <Label>
                        Mô tả những điểm mạnh và kinh nghiệm của bạn đối với
                        công việc này
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

                    <Button type="btn-primary">
                        {isLoading ? <Spinner /> : 'Gửi chào giá'}
                    </Button>
                </form>
            ) : (
                <h2 className="italic text-stone-500">
                    Bạn đã gửi chào giá cho công việc này
                </h2>
            )}
        </div>
    )
}

export default SendBid
