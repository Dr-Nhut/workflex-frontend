import { useEffect, useReducer } from 'react'
import reducer, { UserContext, initialState } from './userSlice'
import { Outlet } from 'react-router-dom'
import { URL_SERVER } from '../../constants'
import axios from 'axios'
import Spinner from '../../ui/Spinner'

function UserProvider() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios
            .get(`${URL_SERVER}/auth/userInfor`, { withCredentials: true })
            .then((response) => {
                dispatch({ type: 'users/login', payload: response.data })
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch({ type: 'users/active' }))
    }, [])

    if (state.status === 'loading')
        return (
            <div className="relative h-screen w-screen">
                <Spinner absolute />
            </div>
        )

    return (
        <UserContext.Provider value={{ user: state, dispatch }}>
            <Outlet />
        </UserContext.Provider>
    )
}

export default UserProvider
