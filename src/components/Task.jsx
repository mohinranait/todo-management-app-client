/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";
import { RiDeleteBin3Line, RiEditBoxLine } from "react-icons/ri";
import { MdOutlineDataSaverOff, MdOutlineRemoveRedEye, MdOutlineTaskAlt } from "react-icons/md";
import { FcParallelTasks } from "react-icons/fc";
import { useState } from "react";
import Modal from "./modal/Modal";
import { useNavigate } from "react-router-dom";


const Task = ({todo,handleDeleteTask}) => {
    const [ isOpenModal, setIsOpenModal] = useState(false);
    const navigate = useNavigate();
    console.log(todo?._id);
    const closeModal = () => {
        setIsOpenModal(false)
    }

    const openModal = () => {
        setIsOpenModal(true)
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'todo',
        item: {id: todo._id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }))


    const handleEdit = (id) => {
        console.log(id);
        navigate(`/dashboard/edit-task/${id}`)
    }

    return (
        <>
            <li ref={drag}  className={`py-3 px-3 shadow cursor-grab ${isDragging ? 'opacity-25 bg-gray-300' : 'opacity-100'}  border-l-2 ${todo?.status == 'todo' ? 'border-pink-600' : todo?.status == 'ongoing' ? 'border-purple-600' : 'border-green-600'} `}>
                <div className="flex gap-3">
                    <div className="w-[40px]">
                        {todo?.status == 'todo' ? <FcParallelTasks size={25} className="" /> : todo?.status == 'ongoing' ? <MdOutlineDataSaverOff size={25} className="text-purple-500"  /> : <MdOutlineTaskAlt size={25} className="text-green-700" /> }
                    </div>
                    <div className="w-full">
                        <p className="text-lg mb-2 font-semibold text-gray-800">{todo.title}</p>
                        <p className="text-xs mb-2  text-gray-400 flex gap-4  items-center"><span>Priority: {todo.priority}</span><span>{todo?.deadlines}</span></p>
                        <p className="text-gray-500 text-sm">{todo.descriptions.slice(0,130)}</p>
                    </div>
                
                </div>
                <ul className="cursor-default flex justify-end gap-3">
                    <li onClick={() => openModal()} className="cursor-pointer text-gray-500"><MdOutlineRemoveRedEye /></li>
                    <li onClick={() => handleEdit(todo?._id)} className="cursor-pointer text-gray-500"><RiEditBoxLine /></li>
                    <li onClick={() => handleDeleteTask(todo?._id)} className="cursor-pointer text-gray-500"><RiDeleteBin3Line /></li>
                </ul>
            </li>
            <Modal isOpenModal={isOpenModal} width={'30'} closeModal={closeModal} >
                <div className="w-[95vw] lg:w-[50vw] space-y-3">
                   <p className="text-lg text-gray-600 font-bold"> <span className="w-[120px] inline-block text-base text-gray-900 font-normal">Title </span> : {todo?.title}</p>
                   <p className="text-base text-gray-600"> <span className="w-[120px] inline-block text-base text-gray-900">Date </span> : {todo?.deadlines}</p>
                   <p className="text-base text-gray-600"> <span className="w-[120px] inline-block text-base text-gray-900">Priority </span> : {todo?.priority}</p>
                   <p className="text-base text-gray-600"> <span className="w-[120px] inline-block text-base text-gray-900">Details </span> : {todo?.descriptions}</p>
                </div>
            </Modal>

        </>
     
    );
};

export default Task;