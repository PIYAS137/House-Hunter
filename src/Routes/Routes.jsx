
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/RootPage/RootPage';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';

const router = createBrowserRouter ([
    {
        path: '/',
        element : <RootPage/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },{
                path: '/login',
                element : <LoginPage/>
            },{
                path: '/signup',
                element : <SignUpPage/>
            }
        ]
    }
])

export default router; 