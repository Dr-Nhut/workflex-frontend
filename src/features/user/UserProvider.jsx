import { useEffect, useReducer, useState } from 'react'
import reducer, { UserContext, initialState } from './userSlice'
import { Outlet } from 'react-router-dom'
import { URL_SERVER } from '../../constants'
import axios from 'axios'
import Spinner from '../../ui/Spinner'
import { io } from 'socket.io-client'

function UserProvider() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [socket, setSocket] = useState(null)

    console.log(state)

    useEffect(() => {
        if (state.id) setSocket(io('http://localhost:3001'))
    }, [state.id])

    useEffect(() => {
        socket?.emit('newUser', state.id)
    }, [state.id, socket])

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
        <UserContext.Provider value={{ user: state, dispatch, socket }}>
            <Outlet />
        </UserContext.Provider>
    )
}

export default UserProvider
