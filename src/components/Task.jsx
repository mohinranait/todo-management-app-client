/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

const Task = ({todo}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'todo',
        item: {id: todo._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }))
    return (
  
        <li ref={drag}  className={`py-3 px-3 rounded shadow cursor-grab ${isDragging ? 'opacity-25 bg-gray-300' : 'opacity-100'}`}>{todo.title}</li>
     
    );
};

export default Task;