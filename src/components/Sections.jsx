/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";
import SectionHeader from "./SectionHeader";
import Task from "./Task";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";


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

    return (
        <>
             <div ref={drop} className={`${isOver ? ' ring-gray-800 ring-1 rounded bg-gray-100': '' }`}>
                <SectionHeader text={text} bg={bg} count={taskToMap?.length || 0}  />
                <ul className="space-y-2 mt-5">
                    {
                        taskToMap?.length > 0 &&  taskToMap?.map(todo =>  <Task key={todo?._id} todo={todo} todos={todos} setTodos={setTodos} /> )
                    }
                </ul>
            </div>
        </>
    );
};

export default Sections;