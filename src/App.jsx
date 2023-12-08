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
import ManagerJobDetail from './page/ManagerJobDetail'
import EmpRefusedJob from './page/EmpRefusedJob'
import FreelancerBids from './page/FreelancerBids'
import EmployerOffers from './page/EmployerOffers'
import EmployerPayment from './page/EmployerPayment'
import CheckoutSuccess from './page/CheckoutSuccess'
import AdminPaymentDetailJob from './page/AdminPaymentDetailJob'
import FavouriteJob from './features/jobs/FavouriteJob'
import BidsJob from './features/jobs/BidsJob'
import CurrentJob from './features/jobs/CurrentJob'
import FreelancerCompleteJob from './features/jobs/FreelancerCompleteJob'
import FreelancerPaidJob from './features/jobs/FreelancerPaidJob'
import PendingJob from './features/jobs/PendingJob'
import AcceptingBidsJob from './features/jobs/AcceptingBidsJob'
import RefusedJob from './features/jobs/RefusedJob'
import EmployerCompleteJob from './features/jobs/EmployerCompleteJob'
import ManagerPendingJob from './admin/job/ManagerPendingJob'
import ManagerPaidJob from './page/ManagerPaidJob'
import ManagerCategory from './page/ManagerCategory'
import SkillCategory from './page/SkillCategory'
import Profile from './page/Profile'
import Notification from './page/Notification'
import ManagerAccount from './page/ManagerAccount'
import FreelancerResult from './page/FreelancerResult'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
})

function App() {
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
                            <Route path="profile/:id" element={<Profile />} />
                            <Route
                                path="/notifications"
                                element={<Notification />}
                            />
                            <Route element={<DashboardLayout />}>
                                <Route
                                    index
                                    path="dashboard"
                                    element={<FreelancerDashboard />}
                                />

                                <Route
                                    path="freelancer-jobs"
                                    element={<FreelancerJob />}
                                >
                                    <Route
                                        index
                                        path="/freelancer-jobs/favarious"
                                        element={<FavouriteJob />}
                                    />

                                    <Route
                                        path="/freelancer-jobs/bids"
                                        element={<BidsJob />}
                                    />

                                    <Route
                                        path="/freelancer-jobs/current"
                                        element={<CurrentJob />}
                                    />

                                    <Route
                                        path="/freelancer-jobs/completed"
                                        element={<FreelancerCompleteJob />}
                                    />

                                    <Route
                                        path="/freelancer-jobs/paid"
                                        element={<FreelancerPaidJob />}
                                    />
                                </Route>
                                <Route
                                    path="employer-job"
                                    element={<EmployerJob />}
                                >
                                    <Route
                                        index
                                        path="/employer-job/pending"
                                        element={<PendingJob />}
                                    />

                                    <Route
                                        path="/employer-job/accepting-bids"
                                        element={<AcceptingBidsJob />}
                                    />

                                    <Route
                                        path="/employer-job/refused"
                                        element={<RefusedJob />}
                                    />

                                    <Route
                                        path="/employer-job/current"
                                        element={<CurrentJob />}
                                    />

                                    <Route
                                        path="/employer-job/completed"
                                        element={<EmployerCompleteJob />}
                                    />
                                </Route>
                                <Route
                                    path="employer-job/refused/:id"
                                    element={<EmpRefusedJob />}
                                />
                                <Route
                                    path="employer-job/:id/offers"
                                    element={<EmployerOffers />}
                                />
                                <Route
                                    path="employer-job/:id/payment"
                                    element={<EmployerPayment />}
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
                                <Route
                                    path="result-freelancer"
                                    element={<FreelancerResult />}
                                />
                                <Route
                                    path="checkout-success"
                                    element={<CheckoutSuccess />}
                                />
                            </Route>

                            <Route
                                path="/admin"
                                element={<AdminDashboardLayout />}
                            >
                                <Route
                                    path="account-manager"
                                    element={<ManagerAccount />}
                                />
                                <Route
                                    path="category-manager"
                                    element={<ManagerCategory />}
                                />
                                <Route
                                    path="skill-manager"
                                    element={<SkillCategory />}
                                />
                                <Route
                                    path="job-manager/:id"
                                    element={<ManagerJobDetail />}
                                />
                                <Route
                                    index
                                    path="/admin/job-pending"
                                    element={<ManagerPendingJob />}
                                />

                                <Route
                                    index
                                    path="/admin/job-payment"
                                    element={<ManagerPaidJob />}
                                />
                                <Route
                                    path="job-manager/:jobId/payment"
                                    element={<AdminPaymentDetailJob />}
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
