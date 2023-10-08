import { UilEye } from '@iconscout/react-unicons'
import { useState } from 'react'
import Button from '../../common/buttons/Button'
import ModalCompound from '../../ui/ModalCompound'
import TaskItemDetail from './TaskItemDetail'

function OpenTaskDetail() {
    const [showModal, setShowModal] = useState()

    return (
        <>
            <Button
                type="btn-text"
                className="mx-auto"
                onClick={() => setShowModal((pre) => !pre)}
            >
                <UilEye className="text-stone-500 hover:text-green-600" />
            </Button>

            {showModal && (
                <ModalCompound>
                    <TaskItemDetail />
                </ModalCompound>
            )}
        </>
    )
}

export default OpenTaskDetail
