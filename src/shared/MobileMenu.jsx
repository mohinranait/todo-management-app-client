

import { HiMiniXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const MobileMenu = ({isToggle,setIsToggle}) => {
    const {user}  = useAuth();

    const handleToggleMenu = () => {
        setIsToggle(!isToggle)
    }

    // when i have click mobile menu then hidden mobile left menu
    const handleMobileMenuShowup = () => {
        setIsToggle(false)
    }
    return (
        <div className='lg:hidden relative'>
            <div className={`mobile-left transition-all duration-500 ${isToggle ? ' left-0' : ' -left-[91vw]  sm:-left-[300px] '}`}>

                <ul>
                    <li className='mobile-logo-wrap'>
                        <div className='text-3xl  text-text-color font-bold'><span className='text-primary'>SCC</span></div>
                        <span onClick={ handleToggleMenu } className='flex items-center justify-center w-8 h-8 rounded-full cursor-pointer bg-slate-100'><HiMiniXMark /></span>
                    </li>
                    <div>
                        <li><Link onClick={handleMobileMenuShowup} to={'/'} className='mobilemenu' >home</Link></li>
                        {
                            user?.email ? <>
                                 <li><Link onClick={handleMobileMenuShowup} to={'/dashboard/manage-task'} className='mobilemenu' >Manage Task</Link></li>
                                 <li><Link onClick={handleMobileMenuShowup} to={'/dashboard/new-task'} className='mobilemenu' >New Task</Link></li>
                                 <li><Link onClick={handleMobileMenuShowup} to={'/dashboard/profile'} className='mobilemenu' >Profile</Link></li>
                               
                            </> : <>
                            <li><Link onClick={handleMobileMenuShowup} to={'/register'} className='mobilemenu' >Register</Link></li>
                            <li><Link onClick={handleMobileMenuShowup} to={'/login'} className='mobilemenu' >Login</Link></li>
                            </>
                        }
                       
                       
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;