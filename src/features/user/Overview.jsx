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

    if (loadingUser) return null

    return (
        <>
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

            <section className="border-b p-4">
                <div className="flex items-center justify-between">
                    <TitleSection icon={UilCommentAltChartLines}>
                        Đánh giá nổi bật
                    </TitleSection>
                    <Button
                        type="btn-text"
                        onClick={() => setShowMore((pre) => !pre)}
                    >
                        Xem thêm
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
        </>
    )
}

export default Overview
