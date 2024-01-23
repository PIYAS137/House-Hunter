
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
import RanterManagePage from '../Pages/Renter/RanterManagePage/RanterManagePage';
import ViewAllItemsPage from '../Pages/ViewAllItemsPage/ViewAllItemsPage';
import OneItemViewPage from '../Pages/OneItemViewPage/OneItemViewPage';


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
            },{
                path : '/allitems',
                element : <ViewAllItemsPage/>
            },{
                path : '/allitems/:sid',
                loader : ({params})=>fetch(`http://localhost:5022/item/${params.sid}`),
                element : <OneItemViewPage/>
            }
        ]
    },
    {
        path : 'owner',
        element : <OwnerRootPage/>,
        children : [
            {
                path : 'profile',
                element : <OwnerDashboard/>
            },
            {
                path: 'add',
                element :<OwnerAddItemPage/>
            },
            {
                path: 'manage',
                element : <OwnerMangePage/>
            }
        ]
    },
    {
        path : 'ranter',
        element : <RanterRootPage/>,
        children : [
            {
                path : 'profile',
                element : <RanterDashboard/>
            },
            {
                path : 'manage',
                element : <RanterManagePage/>
            }
        ]
    }
])



export default router; 