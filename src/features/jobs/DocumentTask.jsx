import { UilFileUpload, UilImage } from '@iconscout/react-unicons'

function DocumentTask() {
    return (
        <div className="h-[500px] bg-stone-300 p-2">
            <div className="flex justify-end">
                <UilImage className="mr-4 h-8 w-8 cursor-pointer rounded bg-stone-50 p-1 hover:bg-primary hover:text-stone-50" />
                <UilFileUpload className="h-8 w-8 cursor-pointer rounded bg-stone-50 p-1 hover:bg-primary hover:text-stone-50" />
            </div>

            <div className="mt-2 border-t border-stone-900">
                <p className="text-center">Chưa có tài liệu nào được tải lên</p>
            </div>
        </div>
    )
}

export default DocumentTask
