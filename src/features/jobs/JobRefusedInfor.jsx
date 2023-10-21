// import { useNavigate, useParams } from 'react-router-dom'
import DescriptionSection from '../../ui/Section/DescriptionSection'
import Button from '../../common/buttons/Button'

function JobRefusedInfor({ jobDetail }) {
    // const jobId = useParams().id
    // const navigate = useNavigate()
    // const { isLoading, mutate } = useMutation({
    //     mutationFn: approvalJob,
    //     onSuccess: (response) => {
    //         toast.success(response.data.message)
    //         navigate(-1)
    //     },
    //     onError: (err) => console.log(err),
    // })

    return (
        <div className="col-span-3 m-4 h-80 rounded bg-stone-200 px-4 py-8">
            <h2 className="mb-2 text-xl font-semibold">
                Lý do công việc bị từ chối
            </h2>

            <DescriptionSection align="text-left">
                {jobDetail.reasonRefused}
            </DescriptionSection>
            <Button
                type="btn-primary"
                className="w-full justify-center rounded"
            >
                Thay đổi và đăng lại
            </Button>

            <Button
                type="btn-text"
                className="mt-2 w-full justify-center rounded"
            >
                Gửi phản hồi
            </Button>
        </div>
    )
}

export default JobRefusedInfor
