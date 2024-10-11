import { useEffect, useReducer } from 'react'
import reducer, { UserContext, initialState } from './userSlice'
import { Outlet } from 'react-router-dom'
import Spinner from '../../ui/Spinner'
// import { io } from 'socket.io-client'
import axios from '../../config/axios.config'
import toast from 'react-hot-toast'

function UserProvider() {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [socket, setSocket] = useState(null)

    // useEffect(() => {
    //     if (state.id) setSocket(io('http://localhost:3001'))
    // }, [state.id])

    // useEffect(() => {
    //     socket?.emit('newUser', state.id)
    // }, [state.id, socket])

    const getMyInfor = async () => {
        try {
            const response = await axios.get('/user/me', {
                withCredentials: true,
            })
            dispatch({ type: 'users/login', payload: response.metadata })
        } catch (err) {
            toast.error(err.message)
        }
    }

    useEffect(() => {
        getMyInfor()
        dispatch({ type: 'users/active' })
        // axios
        //     .get('/user/me', { withCredentials: true })
        //     .then((response) => {
        //         dispatch({ type: 'users/login', payload: response.data })
        //     })
        //     .catch((err) => console.log(err))
        //     .finally(() => dispatch({ type: 'users/active' }))
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
