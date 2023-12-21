import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleLogin,githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSocilaLogin = async (media) => {
        const res = await media();
        if(res.user){
            navigate(location?.state ? location?.state : '/dashboard/manage-task' )
        }
    }
    return (
        <ul className="flex gap-2 justify-center mt-5">
            <li onClick={() => handleSocilaLogin(googleLogin) } className="w-full"><button className='px-5 text-center bg-gray-100 w-full py-2 rounded flex items-center gap-2 hover:bg-gray-200 transition-all text-gray-700 justify-center'> <FaGoogle /> Google</button></li>
            {/* <li onClick={() => handleSocilaLogin(githubLogin) } className="w-full"><button className='px-5 text-center bg-gray-100 w-full py-2 rounded flex items-center gap-2 hover:bg-gray-200 transition-all text-gray-700 justify-center'><FaGithub /> Github</button></li> */}
        </ul>
    );
};

export default SocialLogin;