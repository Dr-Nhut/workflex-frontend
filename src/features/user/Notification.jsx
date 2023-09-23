import { UilBell } from '@iconscout/react-unicons'

function Notification() {
    return (
        <div className="relative cursor-pointer ">
            <UilBell className="relative text-stone-200 hover:text-stone-300" />
            <span className="absolute -top-2 left-2 rounded-full bg-red-500 px-2 text-sm text-stone-50">
                2
            </span>
        </div>
    )
}

export default Notification
