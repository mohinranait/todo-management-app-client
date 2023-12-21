import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    const {user,userProfileUpdate} = useAuth();
    const navigate = useNavigate();

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if(name.lenght == 0) return toast.error("Name can't be emapty");
        try {
            const res = await userProfileUpdate(name) 
            navigate('/')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="mt-10">
            <p className="text-base font-bold text-gray-700">Update Profile</p>
            <form onSubmit={handleUpdateProfile}>
                <div className="mb-4">
                    <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Name</label>
                    <input type="text" name="name" defaultValue={user?.displayName} className="px-3 py-2 rounded border border-gray-200 w-full" placeholder="Name" />
                </div>
                <div className="mb-7">
                    <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Profile picture</label>
                    <input type="file" name="profile" className="px-3 py-2 rounded border border-gray-200 w-full" placeholder="Name" />
                </div>
                <div>
                    <button type="submit" className="w-full bg-primary py-2 text-white rounded">Update profile </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;