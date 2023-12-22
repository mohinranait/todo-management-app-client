/* eslint-disable react/prop-types */

import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();

    if( loading ){
        return <div>
            <div className='text-center h-[calc(100vh-200px)] flex items-center justify-center font-bold  '>
                <span className='text-5xl font-bold text-pink-600'>Loading...</span>
            </div>
        </div>
    }

    if(user?.email){
        return children 
    }

    return <Navigate to={'/login'} state={location?.pathname} replace={true} />
};

export default PrivateRoutes;