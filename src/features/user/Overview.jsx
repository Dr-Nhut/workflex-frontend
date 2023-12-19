import {
    UilUserSquare,
    UilCommentAltChartLines,
    UilEditAlt,
} from '@iconscout/react-unicons'

import TitleSection from '../../ui/TitleSection'
import Feedback from '../../ui/Feedback'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllEvaluationByUser } from '../../services/apiEvaluation'
import Spinner from '../../ui/Spinner'
import TextDescriptionEditor from '../../ui/TextDescriptionEditor'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useContext, useState } from 'react'
import { getInfor, updateInfor } from '../../services/apiUser'
import Button from '../../common/buttons/Button'
import toast from 'react-hot-toast'
import { UserContext } from './userSlice'
import { getFreelancerCompletedAndFailJobs } from '../../services/apiJob'
import CardContainer from '../../ui/CardContainer'
import Rectangle from '../../ui/Rectangle'
import EmployerInformation from './EmployerInformation'

function Overview({ userId }) {
    const { user } = useContext(UserContext)
    const [bio, setBio] = useState('')
    const [description, setDescription] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const queryClient = useQueryClient()

    const { isLoading, data } = useQuery({
        queryKey: ['evaluations', userId],
        queryFn: () => getAllEvaluationByUser(userId),
    })

    const { isLoading: loadingUser } = useQuery({
        queryKey: ['userInfor', userId],
        queryFn: () => getInfor(userId),
        onSuccess: (response) => {
            if (response.bio) setBio(response.bio)
            else setIsEdit(true)
        },
    })

    const { isLoading: loadingJobComplete, data: completeAndFailJobs } =
        useQuery({
            queryKey: ['freelancer-complete-n-fail-jobs', userId],
            queryFn: () => getFreelancerCompletedAndFailJobs(userId),
        })

    const { isLoading: loadingUpdate, mutate } = useMutation({
        mutationFn: updateInfor,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userInfor', userId] })
            toast.success('Cập nhật thông tin thành công!')
            setDescription('')
            setIsEdit(false)
        },
        onError: (err) => {
            toast.error(err.message)
            console.log(err)
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (description) {
            mutate({ bio: description })
        }
    }

    console.log(
        completeAndFailJobs?.filter((job) => job.status !== 0).slice(0, 3)
    )

    if (loadingUser || loadingJobComplete) return null

    return (
        <div className="bg-stone-100">
            <section className="border-b p-4">
                <div className="flex items-center justify-between">
                    <TitleSection icon={UilUserSquare}>
                        Giới thiệu về tôi
                    </TitleSection>

                    {user.id === userId && (
                        <UilEditAlt
                            onClick={() => setIsEdit((pre) => !pre)}
                            className="cursor-pointer text-stone-600 hover:text-stone-500"
                        />
                    )}
                </div>

                {!isEdit || userId !== user.id ? (
                    <TextDescriptionEditor>{bio}</TextDescriptionEditor>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <CKEditor
                            editor={ClassicEditor}
                            data={description || bio}
                            defaultValue={bio}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setDescription(data)
                            }}
                        />
                        <Button type="btn-primary" className="mt-4 rounded">
                            {loadingUpdate ? <Spinner /> : 'Thay đổi'}
                        </Button>
                    </form>
                )}
            </section>

            {user.role === 'fre' || (user.id !== userId && user.role !== 'fre') &&
                completeAndFailJobs.filter((job) => job.status !== 0).length >
                    0 && (
                    <section className="border-b p-4">
                        <div className="flex items-center justify-between">
                            <TitleSection icon={UilCommentAltChartLines}>
                                Công việc đã làm
                            </TitleSection>
                            <Button
                                type="btn-text"
                                // onClick={() => setShowMore((pre) => !pre)}
                            >
                                Xem tất cả
                            </Button>
                        </div>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            completeAndFailJobs
                                .filter((job) => job.status !== 0)
                                .slice(0, 3)
                                .map((job) => (
                                    <CardContainer key={job.id} jobId={job.id}>
                                        <Rectangle background="bg-teal-500">
                                            {job.category}
                                        </Rectangle>
                                        <div className="my-2 flex items-center justify-between">
                                            <h2 className="font-semibold text-stone-900">
                                                {job.name}
                                            </h2>
                                        </div>
                                        <EmployerInformation
                                            employerId={job.employerId}
                                        />
                                    </CardContainer>
                                ))
                        )}
                    </section>
                )}

            <section className="border-b p-4">
                <div className="flex items-center justify-between">
                    <TitleSection icon={UilCommentAltChartLines}>
                        Đánh giá nổi bật
                    </TitleSection>
                    <Button
                        type="btn-text"
                        onClick={() => setShowMore((pre) => !pre)}
                    >
                        {showMore ? 'Ẩn bớt' : 'Xem thêm'}
                    </Button>
                </div>
                {isLoading ? (
                    <Spinner />
                ) : showMore ? (
                    data.map((evaluation) => (
                        <Feedback
                            key={evaluation.id}
                            fullname={evaluation.fullname}
                            avatar={evaluation.avatar}
                            stars={evaluation.stars}
                            comment={evaluation.comment}
                            createAt={evaluation.createAt}
                        />
                    ))
                ) : (
                    [...data.slice(0, 3)].map((evaluation) => (
                        <Feedback
                            key={evaluation.id}
                            fullname={evaluation.fullname}
                            avatar={evaluation.avatar}
                            stars={evaluation.stars}
                            comment={evaluation.comment}
                            createAt={evaluation.createAt}
                        />
                    ))
                )}
            </section>
        </div>
    )
}

export default Overview
