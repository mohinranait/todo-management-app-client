
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Sections from "../../components/Sections";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const TodoManagement = () => {
    const axios = useAxios();
    const {user} = useAuth();
    const [allTodos, setAllTodos] = useState([]);
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [inCompleted, setComplated] = useState([]);

    useEffect(() => {
        const getTodosFunc = async () => {
            const {data} = await axios.get(`/todos?email=${user?.email}`);
            setAllTodos(data.todos)
        }
        getTodosFunc();
    },[])

    useEffect(() => {
        const filterTodos = allTodos?.filter(todo => todo.status == 'todo' )
        const filterProgress = allTodos?.filter(todo => todo.status == 'ongoing' )
        const filterComplated = allTodos?.filter(todo => todo.status == 'completed' )
        setTodos(filterTodos)
        setInProgress(filterProgress)
        setComplated(filterComplated)
    },[allTodos])


   
   const statuses = ['todo','ongoing','completed']
    
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="grid grid-cols-3 gap-5 mt-5">

                {
                    statuses?.map((status,index) => <Sections key={index} status={status} todos={todos} setTodos={setTodos} inProgress={inProgress} inCompleted={inCompleted} allTodos={allTodos} setAllTodos={setAllTodos} /> )
                }
                
            </div>   
        </DndProvider>
    );
};

export default TodoManagement;