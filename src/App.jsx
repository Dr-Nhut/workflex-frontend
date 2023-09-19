import {
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
} from 'react-router-dom'
import HomePage from './page/HomePage'
import Login from './page/Login'
import Register from './page/Register'
import Job from './page/Job'
import AppLayout from './layouts/AppLayout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        element: <AppLayout />,
        children: [
            {
                path: '/jobs',
                element: <Job />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
    // return (
    //     <>
    //         <BrowserRouter>
    //             <Routes>
    //                 <Route path="/" element={<HomePage />} />
    //                 <Route path="/login" element={<Login />} />
    //                 <Route path="/app" element={<h1>WorkFlex</h1>}></Route>
    //             </Routes>
    //         </BrowserRouter>
    //     </>
    // )
}

export default App
