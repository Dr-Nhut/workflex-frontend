import { UilEdit } from '@iconscout/react-unicons'

import Avatar from '../../ui/Avatar'

function UpdateAvatar({ avatar }) {
    return (
        <div className="relative my-8">
            <Avatar image={avatar} type="large" center />

            <label
                htmlFor="editAvt"
                className="absolute bottom-0 right-96 cursor-pointer rounded-full  bg-stone-50 p-2 hover:bg-stone-200"
            >
                <UilEdit size="24" className="text-primary" />
            </label>
            <input id="editAvt" type="file" className="hidden" />
        </div>
    )
}

export default UpdateAvatar
