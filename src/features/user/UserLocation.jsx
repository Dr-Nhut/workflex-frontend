import { UilMapMarker } from '@iconscout/react-unicons'

function UserLocation({ user }) {
    const { fullName, avatarUrl, address } = user
    return (
        <div className="flex items-center gap-x-2">
            <img
                src={avatarUrl}
                alt="avt"
                className="h-16 w-16 rounded-full p-2"
            />
            <div>
                <h2 className="p-px font-bold text-slate-500">{fullName}</h2>
                <span className="flex p-px text-sm font-extralight italic">
                    <UilMapMarker size="18" className="text-red-500" />
                    {address}
                </span>
            </div>
        </div>
    )
}

export default UserLocation
