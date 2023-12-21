import { RiEditBoxLine } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import UpdateProfile from "../../components/form/UpdateProfile";


const Profile = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div className="md:max-w-[400px] mx-auto mt-16">
            <div className="flex gap-8 ">
                <div>
                    <img className="w-20 h-20 rounded-md" src={user?.photoURL || 'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'} alt="" />
                </div>
                <div className="space-y-2">
                    <p className="text-gray-800 flex gap-5"><span className="w-[50px]">Name</span>: {user?.displayName}</p>
                    <p className="text-gray-800 flex gap-5"><span className="w-[50px]">email</span>: {user?.email}</p>
                    <p className="text-gray-800 flex gap-5 items-center"><span className="w-[50px]">Update</span>: <RiEditBoxLine className="cursor-pointer" /></p>
                </div>
            </div>
            {/* <UpdateProfile /> */}

        </div>
    );
};

export default Profile;