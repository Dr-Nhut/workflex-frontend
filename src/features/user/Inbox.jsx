import { UilComment } from '@iconscout/react-unicons'
function Inbox({ background }) {
    return (
        <div className="relative cursor-pointer">
            <UilComment
                className={`relative 
                ${
                    background
                        ? 'text-stone-200 hover:text-stone-300'
                        : 'text-stone-800 hover:text-stone-900'
                }`}
            />
            <span className="absolute -top-2 left-2 rounded-full bg-red-500 px-2 text-sm text-stone-50">
                2
            </span>
        </div>
    )
}

export default Inbox
