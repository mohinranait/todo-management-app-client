import { useParams } from "react-router-dom";
import TaskForm from "../../components/form/TaskForm";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";


const EditTask = () => {
    const [todo, setTodo] = useState({})
    const {id} = useParams();
    console.log(id);
    const axios = useAxios();
    const {user} = useAuth();
    useEffect(() => {
        const getTodo = async () => {
            const {data} = await axios.get(`/todo/${id}?email=${user?.email}`);
            console.log(data.todo);
            setTodo(data.todo);
        }
        getTodo();
    },[id])
    return (
        <div>
            <TaskForm todo={todo} />
        </div>
    );
};

export default EditTask;