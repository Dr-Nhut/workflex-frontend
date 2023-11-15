import { UilEdit } from '@iconscout/react-unicons'

import Avatar from '../../ui/Avatar'
import { useContext } from 'react'
import { useMutation } from '@tanstack/react-query'
import { updateAvatar } from '../../services/apiUser'
import toast from 'react-hot-toast'
import Spinner from '../../ui/Spinner'
import { UserContext } from './userSlice'

function UpdateAvatar({ avatar }) {
    const { dispatch } = useContext(UserContext)

    const { isLoading, mutate } = useMutation({
        mutationFn: updateAvatar,
        onSuccess: (response) => {
            toast.success(response.message)
            dispatch({
                type: 'users/update',
                payload: { avatar: response.avatar },
            })
        },
    })

    if (isLoading) return <Spinner />

    return (
        <div className="relative my-8">
            <Avatar image={avatar} type="w-40 h-40" center />

            <label
                htmlFor="editAvt"
                className="absolute bottom-0 right-96 cursor-pointer rounded-full  bg-stone-50 p-2 hover:bg-stone-200"
            >
                <UilEdit size="24" className="text-primary" />
            </label>
            <input
                id="editAvt"
                type="file"
                className="hidden"
                onChange={(e) => mutate(e.target.files[0])}
            />
        </div>
    )
}

export default UpdateAvatar
