import { useQuery } from '@tanstack/react-query'
import MessageItem from './MessageItem'
import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../features/user/userSlice'
import { getAllMessages } from '../services/apiMessage'

function MessageMainContainer({ partner }) {
    const { user, socket } = useContext(UserContext)
    const [messages, setMessages] = useState([])

    const messagesColumnRef = useRef(null)

    const { isLoading } = useQuery({
        queryKey: ['messages', user.id, partner.id],
        queryFn: () => getAllMessages({ from: user.id, to: partner.id }),
        onSuccess: (data) => {
            setMessages(data)
        },
    })

    useEffect(() => {
        function handler(data) {
            if (data.from === partner.id)
                setMessages((pre) => [
                    ...pre,
                    {
                        fromSelt: false,
                        message: data.message,
                        createdAt: data.createdAt,
                    },
                ])
        }
        socket.on('msg-receive', handler)

        return () => {
            socket.off('msg-receive', handler)
        }
    }, [socket])

    useEffect(() => {
        if (messagesColumnRef.current)
            messagesColumnRef.current.scrollTop =
                messagesColumnRef.current?.scrollHeight
    }, [messages])

    if (isLoading) return null

    return (
        <div className="max-h-[400px] overflow-auto" ref={messagesColumnRef}>
            {messages.map((msg, index) => (
                <MessageItem
                    key={index}
                    host={msg.fromSelt}
                    createdAt={msg.createdAt}
                    senderId={msg.fromSelt ? user.id : partner.id}
                >
                    {msg.message}
                </MessageItem>
            ))}
        </div>
    )
}

export default MessageMainContainer
