/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import SectionHeader from "./SectionHeader";
import Task from "./Task";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'

const Sections = ({status, todos, setTodos, inProgress, inCompleted , setAllTodos}) => {
    const axios = useAxios();
    const {user} = useAuth();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'todo',
        drop : (item) => addItemToSection(item?.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
    }))

    const addItemToSection = async  (id) => {
        setAllTodos((previusTodos) => {
            const mTasks = previusTodos?.map(t => {
                if( t?._id == id){
                    return {...t, status}
                }
                return t;
            })

            
            return mTasks;

        })
        await axios.patch(`/todo/${id}?email=${user?.email}` , {status})

    }


    let text = 'Task'; 
    let bg = 'bg-pink-500';
    let taskToMap = todos;
    if(status === 'ongoing'){
        text = "Ongoing";
        bg = 'bg-purple-500';
        taskToMap = inProgress
    } 

    if(status === 'completed'){
        text = "Completed";
        bg = 'bg-green-500';
        taskToMap = inCompleted
    } 


    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't delete this task",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async (result) => {
            if (result.isConfirmed) {
                setAllTodos((previusTodos) => {
                    const mTasks = previusTodos?.filter(t => t?._id !== id)
                    return mTasks;
                })
                const {data} = await axios.delete(`/todo/${id}?email=${user?.email}`)
                if(data?.success){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
              
            }
        });
    }

    return (
        <>
             <div ref={drop} className={`${isOver ? ' ring-gray-800 ring-1 rounded bg-gray-100': '' }`}>
                <SectionHeader text={text} bg={bg} count={taskToMap?.length || 0}  />
                <ul className="space-y-3 mt-5">
                    {
                        taskToMap?.length > 0 &&  taskToMap?.map(todo =>  <Task key={todo?._id} todo={todo} todos={todos} setTodos={setTodos} handleDeleteTask={handleDeleteTask} /> )
                    }
                </ul>
            </div>
        </>
    );
};

export default Sections;