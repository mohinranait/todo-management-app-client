import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const NewTask = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm()

    const axios = useAxios();
    const navigate = useNavigate()
    const {user} = useAuth();
    const handleNewTask = async (data) => {

     
            const title = data.title
            const userEmail = user?.email;
            const descriptions = data.descriptions;
            const deadlines = data.deadlines;
            const priority = data.priority;
            const status = 'todo'
            const newTodo = {title,userEmail,descriptions,status, deadlines, priority}
            try {
                const {data} = await axios.post(`/todo?email=${user?.email}`, newTodo)
                if(data.success){
                    toast.success("Task created ");
                    navigate(`/dashboard/manage-task`)
                }
            } catch (error) {
                toast.error(error.message)
            }
            
       
    }
    return (
        <>
            <div className="mt-5">
                <form onSubmit={handleSubmit(handleNewTask)} className="lg:max-w-xl mx-auto">
                    <div className="mb-4">
                        <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Title</label>
                        <input type="text" name="title" {...register("title", {required:"Title is required"})} className="px-3 py-2 rounded border border-gray-200 w-full" placeholder="Title" />
                        {errors.title && <p className='text-sm text-red-600 font-normal'>{errors.title.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Description</label>
                        <textarea name="descriptions" {...register("descriptions", {required:"description is required"})} id="" className="px-3 py-2 rounded border border-gray-200 w-full" cols="30" rows="2"></textarea>
                        {errors.descriptions && <p className='text-sm text-red-600 font-normal'>{errors.descriptions.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Task Priority</label>
                        <select name="priority" {...register("priority", {required:"priority is required"})} className="w-full py-2 border border-gray-200 px-3" id="">
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                        {errors.priority && <p className='text-sm text-red-600 font-normal'>{errors.priority.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Date</label>
                       <input type="date" name="deadlines" {...register("deadlines", {required:"Date is required"})} className="px-3 py-2 rounded border border-gray-200 w-full" />
                       {errors.deadlines && <p className='text-sm text-red-600 font-normal'>{errors.deadlines.message}</p>}
                    </div>
                    <div>
                        <button className="w-full bg-primary py-2 text-white rounded">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewTask;