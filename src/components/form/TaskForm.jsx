import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const TaskForm = ({todo}) => {
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
        const status = todo ? todo?.status :  'todo'
        const todoObject = {title,userEmail,descriptions,status, deadlines, priority}
        try {
            if(!todo){
                const {data} = await axios.post(`/todo?email=${user?.email}`, todoObject)
                if(data.success){
                    toast.success("Task created ");
                    navigate(`/dashboard/manage-task`)
                }
            }else{
                const {data} = await axios.patch(`/todo/${todo?._id}?email=${user?.email}`, todoObject)
                if(data.success){
                    toast.success("Task Updated ");
                    navigate(`/dashboard/manage-task`)
                }
            }
           
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleNewTask)} className="lg:max-w-xl mx-auto">
                <div className="mb-4">
                    <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Title</label>
                    <input type="text" name="title" {...register("title", {required:"Title is required"})} defaultValue={todo?.title || ''} className="px-3 py-2 rounded border border-gray-200 w-full" placeholder="Title" />
                    {errors.title && <p className='text-sm text-red-600 font-normal'>{errors.title.message}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="" className="text-sm text-gray-500 mb-2 inline-block">Description</label>
                    <textarea name="descriptions" {...register("descriptions", {required:"description is required"})} defaultValue={todo?.descriptions || ''} id="" className="px-3 py-2 rounded border border-gray-200 w-full" cols="30" rows="2"></textarea>
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
                    <input type="date" name="deadlines" {...register("deadlines", {required:"Date is required"})} defaultValue={todo?.deadlines || ''} className="px-3 py-2 rounded border border-gray-200 w-full" />
                    {errors.deadlines && <p className='text-sm text-red-600 font-normal'>{errors.deadlines.message}</p>}
                </div>
                <div>
                    <button className="w-full bg-primary py-2 text-white rounded"> {todo ? 'Update': "Save"} </button>
                </div>
            </form>   
        </>
    );
};

export default TaskForm;