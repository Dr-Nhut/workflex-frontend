import MessageContainer from '../../ui/MessageContainer'
import SendMessage from './SendMessage'

function MessageTask() {
    return (
        <div className="relative h-[500px] bg-stone-100 p-4">
            <MessageContainer />
            <SendMessage />
        </div>
    )
}

export default MessageTask
