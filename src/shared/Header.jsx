/* eslint-disable react/prop-types */
import {Link, NavLink, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { FcMenu } from 'react-icons/fc';

const Header = ({isToggle, setIsToggle}) => {
    const {logOut,user} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logOut();
        navigate('/')
    }
    return (
        <header className=''>
            <div>
                <div className="container lg:max-w-6xl px-5 lg:px-0 grid grid-cols-3 items-center h-[100px]">
                    <div className="col-span-2 flex items-center gap-16">
                        <div className='flex items-center gap-3'>
                            <span onClick={() => setIsToggle(!isToggle)} className='flex lg:hidden items-center justify-center px-2 cursor-pointer hover:bg-gray-100 py-2 bg-gray-50 rounded'><FcMenu /></span>
                            <span>
                                <span className="text-4xl font-bold text-primary">SCC</span>
                            </span>
                        </div>
                        <ul className='hidden lg:flex gap-3  items-center '>
                            <li><NavLink to={'/'} className={`link-menu`}>Home</NavLink></li>
                           
                           
                            {
                                user?.email ?  <>
                                    <li><NavLink to={'/dashboard/manage-task'} className={`link-menu`}>Dashboard</NavLink></li>
                                    <li><button className={`link-menu`}>Sign Out</button></li>
                                </> : 
                                <>
                                    <li><NavLink to={'/login'} className={`link-menu`}>Login</NavLink></li>
                                    <li><NavLink to={'/register'} className={`link-menu`}>Register</NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className="text-right">
                        {
                            user?.email ?  <button onClick={handleLogout} className='ml-auto px-4 py-1 inline-block bg-white rounded border border-gray-100 text-center'>Sign Out</button>
                            : 
                            <Link to={'/login'} className='ml-auto px-4 py-1 inline-block bg-white rounded border border-gray-100 text-center'>Sign In</Link>
                        }
                       
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;