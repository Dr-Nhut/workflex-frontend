import {
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
} from 'react-router-dom'
import HomePage from './page/HomePage'
import Login from './page/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/login',
        element: <Login />,
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
