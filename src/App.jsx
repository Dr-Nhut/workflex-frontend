import {
    BrowserRouter,
    Route,
    // RouterProvider,
    Routes,
    // createBrowserRouter,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProtectComponent from './ui/ProtectComponent'
import HomePage from './page/HomePage'
import Login from './page/Login'
import Register from './page/Register'
import FindWork from './page/FindWork'
import AppLayout from './layouts/AppLayout'
import Freelancer from './page/Freelancer'
import MyProfile from './page/MyProfile'
import FreelancerDashboard from './page/FreelancerDashboard'
import DashboardLayout from './layouts/DashboardLayout'
import AdminDashboardLayout from './layouts/AdminDashboardLayout'
import FreelancerJob from './page/FreelancerJob'
import Contract from './features/jobs/Contract'
import EmployerJob from './page/EmployerJob'
import VerifyEmail from './page/VerifyEmail'
import RegisterAccount from './features/auth/RegisterAccount'
import UserProvider from './features/user/UserProvider'
import { Toaster } from 'react-hot-toast'
import ManagerJob from './page/ManagerJob'
import ManagerJobDetail from './page/ManagerJobDetail'
import EmpRefusedJob from './page/EmpRefusedJob'
import FreelancerBids from './page/FreelancerBids'
import EmployerOffers from './page/EmployerOffers'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <HomePage />,
//     },
//     {
//         path: '/login',
//         element: <Login />,
//     },
//     {
//         element: <RegisterAccount />,
//         children: [
//             {
//                 path: '/register',
//                 element: <Register />,
//             },
//             {
//                 path: '/verify-email',
//                 element: <VerifyEmail />,
//             },
//         ],
//     },
//     {
//         element: <AppLayout />,
//         children: [
//             {
//                 path: '/findwork',
//                 element: <FindWork />,
//             },
//             {
//                 path: '/freelancers',
//                 element: <Freelancer />,
//             },
//             {
//                 path: '/my-profile',
//                 element: <MyProfile />,
//             },
//             {
//                 element: <DashboardLayout />,
//                 children: [
//                     {
//                         path: '/dashboard',
//                         element: <FreelancerDashboard />,
//                     },
//                     {
//                         path: '/freelancer-jobs',
//                         element: <FreelancerJob />,
//                     },
//                     {
//                         path: 'employer-job',
//                         element: <EmployerJob />,
//                     },
//                     {
//                         path: '/contract',
//                         element: <Contract />,
//                     },
//                     {
//                         path: '/freelancer-findwork',
//                         element: <FindWork />,
//                     },
//                     {
//                         path: '/find-freelancer',
//                         element: <Freelancer />,
//                     },
//                 ],
//             },
//         ],
//     },
// ])

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
})

function App() {
    // return (
    //     <UserContext.Provider value={{ state, dispatch }}>
    //         <RouterProvider router={router} />
    //     </UserContext.Provider>
    // )
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
            <BrowserRouter>
                <Routes>
                    <Route element={<UserProvider />}>
                        <Route element={<ProtectComponent />}>
                            <Route index path="/" element={<HomePage />} />
                            <Route path="/login" element={<Login />} />
                            <Route element={<RegisterAccount />}>
                                <Route
                                    index
                                    path="/register"
                                    element={<Register />}
                                />
                                <Route
                                    path="/verify-email"
                                    element={<VerifyEmail />}
                                />
                            </Route>
                        </Route>

                        <Route element={<AppLayout />}>
                            <Route path="my-profile" element={<MyProfile />} />
                            <Route element={<DashboardLayout />}>
                                <Route
                                    index
                                    path="dashboard"
                                    element={<FreelancerDashboard />}
                                />

                                <Route
                                    path="freelancer-jobs"
                                    element={<FreelancerJob />}
                                />
                                <Route
                                    path="employer-job"
                                    element={<EmployerJob />}
                                />
                                <Route
                                    path="employer-job/refused/:id"
                                    element={<EmpRefusedJob />}
                                />
                                <Route
                                    path="employer-job/:id/offers"
                                    element={<EmployerOffers />}
                                />
                                <Route path="contract" element={<Contract />} />
                                <Route
                                    path="freelancer-findwork"
                                    element={<FindWork />}
                                />
                                <Route
                                    path="freelancer-bids/:id"
                                    element={<FreelancerBids />}
                                />
                                <Route
                                    path="find-freelancer"
                                    element={<Freelancer />}
                                />
                            </Route>

                            <Route
                                path="/admin"
                                element={<AdminDashboardLayout />}
                            >
                                <Route
                                    path="job-manager/:id"
                                    element={<ManagerJobDetail />}
                                />
                                <Route
                                    path="job-manager"
                                    element={<ManagerJob />}
                                />
                            </Route>
                            <Route element={<ProtectComponent />}>
                                <Route path="findwork" element={<FindWork />} />
                                <Route
                                    path="findfreelancer"
                                    element={<Freelancer />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
