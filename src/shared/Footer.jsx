import { HiOutlineHome } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className='bg-slate-800'>
            <div className='  pt-24 pb-10 container lg:max-w-6xl px-5 lg:px-0'>
                <div className='grid  md:grid-cols-3 '>
                    <div className='col-span-2 grid sm:grid-cols-2 gap-10 '>
                       
                        <div>
                           
                            <p className="mb-4"><span className="text-3xl font-bold text-white">SCC</span></p>
                            <p><span className="text-sm text-gray-500 font-normal ">One of the platforms for online task management. You can use it with a free account.</span></p>
                            <ul className="flex flex-wrap items-center gap-4 mt-4">
                                <li><a className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-primary before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-300  " href="#"> <FaFacebookF className='z-10' /> </a></li>
                                <li><a className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-primary before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-300  " href="#"> <FaLinkedin className='z-10' /> </a></li>
                                <li><a className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-primary before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-300  " href="#"> <FaInstagram className='z-10' /> </a></li>
                                <li><a className="w-8 h-8 bg-gray-100 flex items-center justify-center rounded-full relative before:w-full before:h-full before:absolute before:bg-primary before:left-0 before:top-0 before:rounded-full before:scale-0 before:hover:scale-100 before:transition-all before:duration-500 text-slate-700 hover:text-white transition-all duration-300  " href="#"> <FaYoutube className='z-10' /> </a></li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-lg font-bold text-gray-300'>Importent Links</p>
                            <ul className='space-y-2 mt-5'>
                                <li><Link to="/" className='text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-white group-hover:border-white'></span>Home</Link></li>
                                <li><Link to="/dashboard/manage-task" className='text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-white group-hover:border-white'></span> Create new Task</Link></li>
                                <li><Link to={'/login'} className='text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-white group-hover:border-white'></span> Login</Link></li>
                                <li><Link to={'/register'} className='text-gray-400 text-sm hover:text-white transition-all duration-300 flex items-center gap-2 group '> <span className='w-[6px] h-[6px] rounded-full border inline-block group-hover:bg-white group-hover:border-white'></span> Register</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='text-lg font-bold text-gray-300'>Contact Us</p>
                            <ul className='space-y-2 mt-5'>
                                <li className='flex gap-2 text-white '> <HiOutlineHome /> <p className='text-gray-400 text-sm   '>  <span className='font-bold'>Address:</span>  <span>1702 Los Angeles, California, American</span></p></li>
                                <li className='flex gap-2 text-white '> <FaTelegramPlane /> <p className='text-gray-400 text-sm   '>  <span className='font-bold'>Mail us:</span>  <span>demo@clickboom.com</span></p></li>
                                <li className='flex gap-2 text-white '> <FaPhoneAlt /> <p className='text-gray-400 text-sm   '>  <span className='font-bold'>Phone:</span>  <a href='tel:01728068200' className='text-white'>1-888-345-6789</a></p></li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>  
    );
};

export default Footer;