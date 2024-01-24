
import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../Pages/RootPage/RootPage';
import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import OwnerDashboard from '../Pages/Owner/OwnerDashboard/OwnerDashboard';
import OwnerRootPage from '../Pages/Owner/OwnerRootPage/OwnerRootPage';
import OwnerAddItemPage from '../Pages/Owner/OwnerAddItemPage/OwnerAddItemPage';
import OwnerMangePage from '../Pages/Owner/OwnerMangePage/OwnerMangePage';
import RanterRootPage from '../Pages/Renter/RanterRootPage/RanterRootPage';
import RanterDashboard from '../Pages/Renter/RanterDashboard/RanterDashboard';
import ViewAllItemsPage from '../Pages/ViewAllItemsPage/ViewAllItemsPage';
import OneItemViewPage from '../Pages/OneItemViewPage/OneItemViewPage';
import PrivateRoute from '../Private/PrivateRoute';
import OwnerUpdatePage from '../Pages/Owner/OwnerUpdatePage/OwnerUpdatePage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }, {
                path: '/login',
                element: <LoginPage />
            }, {
                path: '/signup',
                element: <SignUpPage />
            }, {
                path: '/allitems',
                element: <ViewAllItemsPage />
            }, {
                path: '/allitems/:sid',
                loader: ({ params }) => fetch(`https://house-hunter-backend-eight.vercel.app/item/${params.sid}`),
                element: <PrivateRoute><OneItemViewPage /></PrivateRoute>
            },
            {
                path: 'update/:sid',
                loader: ({ params }) => fetch(`https://house-hunter-backend-eight.vercel.app/item/${params.sid}`),
                element: <PrivateRoute><OwnerUpdatePage /></PrivateRoute>
            }
        ]
    },
    {
        path: 'owner',
        element: <OwnerRootPage />,
        children: [
            {
                path: 'profile',
                element: <PrivateRoute><OwnerDashboard /></PrivateRoute>
            },
            {
                path: 'add',
                element: <PrivateRoute><OwnerAddItemPage /></PrivateRoute>
            },
            {
                path: 'manage',
                element: <PrivateRoute><OwnerMangePage /></PrivateRoute>
            },
        ]
    },
    {
        path: 'ranter',
        element: <RanterRootPage />,
        children: [
            {
                path: 'profile',
                element: <PrivateRoute><RanterDashboard /></PrivateRoute>
            },
        ]
    }
])



export default router; 