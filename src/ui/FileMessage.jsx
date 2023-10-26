import { UilImageDownload } from '@iconscout/react-unicons'
import Button from '../common/buttons/Button'
import { Link } from 'react-router-dom'
import { URL_SERVER_DOCUMENT } from '../constants'
import { saveAs } from 'file-saver'

function FileMessage({ children, postAt }) {
    return (
        <div className="rounded-xl bg-stone-50 px-2 pt-2">
            <Link to={`${URL_SERVER_DOCUMENT}${children}`} target="_blank">
                <h2 className="font-semibold text-stone-900">{children}</h2>
            </Link>
            <div className="flex items-center justify-between text-stone-900">
                <p>{postAt}</p>
                <Button
                    type="btn-text"
                    onClick={() => {
                        saveAs(`${URL_SERVER_DOCUMENT}${children}`, children)
                    }}
                >
                    <UilImageDownload className="text-primary" size="20" />
                </Button>
            </div>
        </div>
    )
}

export default FileMessage
