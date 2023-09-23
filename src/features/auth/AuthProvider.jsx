import { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [token, setToken] = useState(null)

    const handleLogin = async () => {}
    return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>
}

export default AuthProvider
