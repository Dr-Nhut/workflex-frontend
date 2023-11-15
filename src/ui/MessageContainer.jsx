import { useQuery } from '@tanstack/react-query'
import MessageItem from './MessageItem'
import { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../features/user/userSlice'
import { useSearchParams } from 'react-router-dom'
import { getAllMessages } from '../services/apiMessage'

function MessageContainer() {
    const { user, socket } = useContext(UserContext)
    const [searchParams] = useSearchParams()
    const [messages, setMessages] = useState([])

    const messagesColumnRef = useRef(null)

    const { isLoading } = useQuery({
        queryKey: ['messages', user.id, searchParams.get('partner')],
        queryFn: () =>
            getAllMessages({ from: user.id, to: searchParams.get('partner') }),
        onSuccess: (data) => {
            setMessages(data)
        },
    })

    useEffect(() => {
        function handler(data) {
            if (data.from === searchParams.get('partner'))
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
                    senderId={
                        msg.fromSelt ? user.id : searchParams.get('partner')
                    }
                >
                    {msg.message}
                </MessageItem>
            ))}
        </div>
    )
}

export default MessageContainer
