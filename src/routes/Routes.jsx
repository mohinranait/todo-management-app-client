import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import TodoManagement from '../pages/dashboard/TodoManagement';
import NewTask from '../pages/dashboard/NewTask';
import PrivateRoutes from './PrivateRoutes';

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element : <MainLayout />,
        children : [
            {
                path: '/',
                element : <Home />
            },
            {
                path: '/dashboard',
                element : <PrivateRoutes><Dashboard /></PrivateRoutes> ,
                children : [
                    {
                        path: 'manage-task',
                        element : <TodoManagement />
                    },
                    {
                        path: 'new-task',
                        element : <NewTask />
                    },
                ]
            },
            {
                path: '/login',
                element : <Login />
            },
            {
                path: '/register',
                element : <Register />
            },
        ]
    }
])

export default myRoutes