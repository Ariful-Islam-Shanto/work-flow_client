import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { FaHome, FaTasks } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import TaskList from '../../Components/Task/TaskList';
import AddTask from '../../Components/Task/AddTask';
import { RxCross2 } from "react-icons/rx";

const Dashboard = () => {
  //? All tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  console.log("all tasks", tasks);
    const [isOpen, setIsOpen] = useState(false);
    const taskTypes = ["Pending", "In Progress", "Completed", "Deployed", "Deferred"];

    return (
        
        <div  className='bg-gradient-to-br from-[#000d29] to-[#000d29] flex items-start justify-between min-h-screen'>

{/* Add task modal */}
{isOpen && 
<div className='h-screen w-full z-10 fixed top-0 left-0 ' >
    <div className='absolute z-[5] w-full h-full bg-black opacity-60'></div>
        <div className="relative h-full z-10 flex items-center justify-center overflow-y-scroll">
            <AddTask setIsOpen={setIsOpen} addTask={addTask}/>
        <button className='absolute top-5 right-5 px-3 py-3 text-lg text-black rounded-full bg-white' onClick={() =>
        setIsOpen(false)
        }><RxCross2/></button>
        </div>
</div>
}
         {/* Dashboard menu */}
             <div className='w-[200px]  bg-gradient-to-br from-[#132854] to-[#000d29] min-h-screen'>
                <div className='flex pt-4 items-center justify-center'>
               
                <a className=""><img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711266614/WorkflowLogo_adch3i.svg" alt="" className='text-black'/></a>
                </div>
             <ul className="menu text-left mt-6">
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-gray-900 text-center bg-[#c0ff3a] rounded-sm"
                    : "text-gray-400 rounded-sm text-center"
                }
              >
                <li className=" w-full">
                  <a className="w-full">
                
                    <MdSpaceDashboard/> Dashboard
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="todo"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-center bg-[#3b82f6] rounded-sm"
                    : "text-gray-400 rounded-sm text-center"
                }
              >
                <li className=" w-full">
                  <a className="w-full">
                
                     <FaTasks/> My Task
                  </a>
                </li>
              </NavLink>
              <div className="divider"></div>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-white text-center bg-[#3b82f6] rounded-sm"
                    : "text-gray-400 rounded-sm text-center"
                }
              >
                <li className=" w-full">
                  <a className="w-full">
                    
                    <FaHome/> Home
                  </a>
                </li>
              </NavLink>
            </ul>
             </div>
             <div className='flex-1 px-6 py-6 min-h-screen '>

                {/* dashboard header */}
             <div className="flex bg-transparent backdrop-blur-2xl border- border-gray-400  rounded-lg items-center justify-between gap-4">
              <div>
                <p className="text-xs md:text-sm text-gray-300 font-thin">
                  Hello Ariful Islam
                </p>
                <h1 className="text-md md:text-4xl font-semibold text-gray-100">
                  You have got 4  task today.
                </h1>
              </div>
            
          
            </div>

             <div className='flex mt-6 items-center justify-between'>
                 {/* filter and sort */}
              <div className='flex  items-center gap-8'>
                <p>Filter By : </p>
                <div className='flex items-center gap-4'>
                    <input className='px-5 py-2 bg-[#001f3e]' type="text" name="" placeholder='Assignee' id="" />
                    <select className='px-5 py-2 bg-[#001f3e]' name="Priority" id="">
                        <option selected value="Priority" disabled>Priority</option>
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select>
                    <input className='px-5 py-2 bg-[#001f3e]' type="date" name="" id="" />
                </div>
            </div>

            {/* Add task button*/}
                <button onClick={() => {
                    setIsOpen(!isOpen);
                }} className='px-5 py-2 text-sm font-semibold text-gray-800 bg-[#c0ff3a] rounded-sm'>Add new task</button>
             </div>


                {/* All Tasks */}

                <div className='flex items-center justify-between mt-12 h-[60vh] gap-0'>
                    {taskTypes.map((type, index)=> 
                        <TaskList key={index} heading={type}/>
                        )}
                </div>
                 <Outlet/>
             </div>
         </div>
    );
};

export default Dashboard;