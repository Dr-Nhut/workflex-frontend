import { UilFileUpload, UilImage } from '@iconscout/react-unicons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { uploadDocumentImage } from '../../services/apiUpload'
import Spinner from '../../ui/Spinner'
import { useContext } from 'react'
import { UserContext } from '../user/userSlice'
import FileMessage from '../../ui/FileMessage'
import { getDocuments } from '../../services/apiTask'
import formatFullTime from '../../utils/formatFullTime'
import toast from 'react-hot-toast'
import FileMessageItem from '../../ui/FileMessageItem'

function DocumentTask({ taskId }) {
    const { user } = useContext(UserContext)
    const queryClient = useQueryClient()

    const {
        isLoading: loadingDocuments,
        data: documents,
        // error,
    } = useQuery({
        queryKey: ['documents'],
        queryFn: () => getDocuments(taskId),
    })

    const { isLoading: loadingPostFile, mutate } = useMutation({
        mutationFn: uploadDocumentImage,
        onSuccess: () => {
            queryClient.invalidateQueries()
            toast.success('Đã gửi ảnh')
        },
    })

    const handleUploadImage = (e) => {
        mutate({ id: taskId, payload: e.target.files[0], userId: user.id })
    }

    return (
        <div className="h-[500px] bg-stone-300 p-2">
            <div className="flex justify-end">
                {loadingPostFile ? (
                    <Spinner />
                ) : (
                    <label htmlFor="image">
                        <UilImage className="mr-4 h-8 w-8 cursor-pointer rounded bg-stone-50 p-1 hover:bg-primary hover:text-stone-50" />
                    </label>
                )}
                <input
                    type="file"
                    className="hidden"
                    id="image"
                    name="image"
                    onChange={handleUploadImage}
                />
                <UilFileUpload className="h-8 w-8 cursor-pointer rounded bg-stone-50 p-1 hover:bg-primary hover:text-stone-50" />
            </div>

            {loadingDocuments ? (
                <Spinner />
            ) : (
                <div className="mt-2 border-t border-stone-900">
                    {documents.length === '0' ? (
                        <p className="text-center">
                            Chưa có tài liệu nào được tải lên
                        </p>
                    ) : (
                        documents.map((document, index) => (
                            <FileMessageItem
                                key={index}
                                senderId={document.userId}
                                host={document.userId === user.id}
                            >
                                <FileMessage
                                    postAt={formatFullTime(document.createAt)}
                                >
                                    {document.filename}
                                </FileMessage>
                            </FileMessageItem>
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default DocumentTask
