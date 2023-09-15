import { UilMapMarker } from '@iconscout/react-unicons'

function UserLocation({user}) {
    const {fullName, avatarUrl, address} = user;
    return ( 
        <div className="flex gap-x-2 items-center">
            <img src={avatarUrl} alt="avt" className="w-16 h-16 rounded-full p-2"/>
            <div>
                <h2 className="font-bold p-px">{fullName}</h2>
                <span className="flex font-extralight italic text-sm p-px">
                    <UilMapMarker 
                    size="18" className="text-red-500"/>
                    {address}
                </span>
            </div>
        </div>
     );
}

export default UserLocation;