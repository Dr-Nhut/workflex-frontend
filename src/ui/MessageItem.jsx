import Avatar from '../ui/Avatar'

function MessageItem({ host, children }) {
    return (
        <div className={`mb-4 flex w-full ${host && 'justify-end'}`}>
            {host && (
                <span className="mr-2 rounded-xl bg-stone-300 p-2">
                    {children}
                </span>
            )}
            <Avatar
                image={
                    host
                        ? 'https://i.pravatar.cc/150?u=a042581f4e29026awsl'
                        : 'https://i.pravatar.cc/150'
                }
                type="small"
            />
            {!host && (
                <span className="ml-2 rounded-xl bg-stone-300 p-2">
                    {children}
                </span>
            )}
        </div>
    )
}

export default MessageItem
