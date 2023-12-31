import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin";
import { uploadImage } from "../../services/uploadImage";


const Register = () => {
    const {createUser,userProfileUpdate} = useAuth();
    const { register, handleSubmit,  formState: { errors } } = useForm()
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    
    const handleRegister = async (data) => {

        const name = data.name;
        const email = data.email;
        const imageFile = data.photo[0];
        const password = data.password;

        // Name validation
        if( name.length == 0){
            toast.error("Name filed is require");
            return ;
        }

        
        // Email validation
        if( email.length == 0){
            toast.error("Email filed is require");
            return ;
        }


        try {

            const user = await createUser(email, password);
            const profile = await uploadImage(imageFile)

            if( user.user ){
                await userProfileUpdate({ name,profile});
                const newUser = {name ,email,avater:profile}
                try {
                    await axiosPublic.post(`/users`, {newUser})                    
                } catch (error) {
                    toast.error(error.message);
                }
            }
            toast.success("Register Successfull")
            navigate('/');
        } catch (error) {
        
            if( error.message == 'Firebase: Error (auth/email-already-in-use).'){
                toast.error("This email already exists");
                return
            }else{
                toast.error(error.message);
                return
            }
        }

    }

    const passwordValidation = {
        required:"Password is required", 
        maxLength: {
            value: 8,
            message: "Maximum charecter 8"
        },
        minLength: {
            value: 4,
            message: "Minimum charecter is 4"
        }
    }

    const emailValidation = {
        required : "Email fild is Required",
        minLength: {
            value: 5,
            message: "Email charecter length must bee 5 charecter"
        },
        maxLength: {
            value : 100,
            message : "Email charecter limit is 100"
        },
        pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message : "Invalid email address"
        }
    }

    return (
        <section className=''>
            <div className=' min-h-screen py-28' >
                <div className="container flex items-start">
                    <div className=" w-[300px] md:w-[450px] overflow-hidden bg-white mx-auto rounded-lg">
                        
                            <div className='px-5 py-5 md:px-10 md:pb-10 rounded-b-lg  '>
                                <div className='text-3xl pb-5 font-semibold text-gray-600'>Register Form</div>
                                <div>
                                    <form onSubmit={handleSubmit(handleRegister)}>
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Full Name</label>
                                            <input type="text" name='name' {...register("name", {required:"Name is required"})} placeholder='Full Name' className='px-3 w-full py-3 border border-gray-200 text-gray-600 rounded-md outline-none' />
                                            {errors.name && <p className='text-sm text-red-600 font-normal'>{errors.name.message}</p>}
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Image URL</label>
                                            <input type="file" name='photo' {...register("photo")} placeholder='Image URL' className='px-3 w-full py-3 border border-gray-200 text-gray-600 rounded-md outline-none' />
                                        </div>
                                        <div className='mb-4'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Email</label>
                                            <input type="email" name='email' {...register("email", emailValidation )} placeholder='Email' className='px-3 w-full py-3 border border-gray-200 text-gray-600 rounded-md outline-none' />
                                            {errors.email && <p className='text-sm text-red-600 font-normal'>{errors.email.message}</p>}
                                        </div>
                                        <div className='mb-5'>
                                            <label htmlFor="" className='mb-1 block font-medium text-gray-300'>Password</label>
                                            <input type="password" name='password' {...register("password", passwordValidation)} placeholder='Password' className='px-3 w-full py-3 border border-gray-200 text-gray-600 rounded-md outline-none' />
                                            {errors.password && <p className='text-sm text-red-600 font-normal'>{errors.password.message}</p>}
                                        </div>
                                        <div className='mb-4 flex gap-5'>
                                            <button type='submit' className='px-5 py-3 rounded-md bg-primary text-gray-200 font-medium w-full'>Sign Up</button>
                                           {/* <EmailLogin /> */}
                                        </div>
                                    </form>
                                </div>
                                <p className='text-center text-gray-600'>Already have a  account ? <Link to={'/login'} className='text-primary'>Sign In</Link> </p>
                                <SocialLogin />
                            </div>
                    
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Register;