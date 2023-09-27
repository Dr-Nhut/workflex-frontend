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
import FindWork from './page/FindWork'
import AppLayout from './layouts/AppLayout'
import Freelancer from './page/Freelancer'
import MyProfile from './page/MyProfile'
import FreelancerDashboard from './page/FreelancerDashboard'
import DashboardLayout from './layouts/DashboardLayout'

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
                path: '/findwork',
                element: <FindWork />,
            },
            {
                path: '/freelancers',
                element: <Freelancer />,
            },
            {
                path: '/my-profile',
                element: <MyProfile />,
            },
            {
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <FreelancerDashboard />,
                    },
                    {
                        path: '/freelancer-findwork',
                        element: <FindWork />,
                    },
                ],
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
