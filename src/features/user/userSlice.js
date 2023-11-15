import Cookies from "js-cookie";
import { createContext } from "react";

export const UserContext = createContext()

export const initialState = {
    status: 'loading'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'users/login': return { ...state, ...action.payload, status: 'active' }
        case 'users/logout':
            Cookies.remove('token')
            return { status: 'active' }
        case 'users/active': return { ...state, status: 'active' }
        case 'users/update': return { ...state, ...action.payload }
        default: throw new Error(`Invalid action ${action.type}`);

    }
}

export default reducer;