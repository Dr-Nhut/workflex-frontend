import Input from '../../common/Input'
import { UilMessage } from '@iconscout/react-unicons'
import Button from '../../common/buttons/Button'
function SendMessage() {
    return (
        <div className="absolute bottom-4 flex w-full">
            <Input placeholder="Soạn tin..." />
            <Button type="btn-text">
                <UilMessage className="text-primary" />
            </Button>
        </div>
    )
}

export default SendMessage
