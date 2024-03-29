import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const TaskItem = ({task, setIsEditTask ,handleEditTask,}) => {
    return (
        <div className='bg-[#4995c1] p-3 shadow-xl rounded-xl'>
           <div className='flex items-center justify-between'>
           <p className='bg-gray-100 badge text-gray-900 '>{task?.priority}</p>
            <p className={`badge px-3 py-2 ${task?.status === "Completed" && 'bg-blue-300'} ${task?.status === "Pending" && 'bg-[#9d6da3]'} ${task?.status === "Deployed" && 'bg-green-300'} ${task?.status === "Deferred" && 'bg-red-300'} bg-[#c0ff3a] font-medium text-gray-900`}>{task?.status}</p>

           </div>
            <h1 className='mt-2 text-sm text-gray-200 font-bold'>{task?.title}</h1>
            <p className='text-xs text-gray-300'>{task?.description}</p>
           <div className='flex items-center justify-between'>
           <p className='text-xs mt-4 text-gray-200'>@{task?.assignee}</p>
            <button onClick={() => {
                setIsEditTask(true);
                handleEditTask(task?.id)
            }} className='text-xs mt-4 text-gray-200'><BsThreeDotsVertical/></button>
           </div>
        </div>
    );
};

export default TaskItem;