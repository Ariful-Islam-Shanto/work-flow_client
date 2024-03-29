import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";
import { FaHome, FaTasks } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import TaskList from '../../Components/Task/TaskList';
import AddTask from '../../Components/Task/AddTask';
import { RxCross2 } from "react-icons/rx";
import Modal from '../../Components/Modal/Modal';
import EditTask from '../../Components/Task/EditTask';

const Dashboard = () => {
  //? All tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  //? All filtering options
  const [filterByPriority, setFilterByPriority] = useState('');
  const [filterByDate, setFilterByDate] = useState('');
  const [filterByAssignee, setFilterByAssignee] = useState('');

  //? All sorting options
  const [sortDirection, setSortDirection] = useState('')
  
  console.log(filterByAssignee);
  console.log("all tasks", tasks);
    const [isOpen, setIsOpen] = useState(false);
    const [isEditTask, setIsEditTask] = useState(false);
    const [editableTask, setEditableTask] = useState({});
    const taskTypes = ["Pending", "In Progress", "Completed", "Deployed", "Deferred"];


    //? Handle task edit
    const handleEditTask = (id) => {
      // console.log(id);
      const editableTask = tasks.find(task => task.id === id);
      console.log("editable task", editableTask);
      setEditableTask(editableTask);
    }

    //? Handle delete task
    const handleDeleteTask = (id) => {
      const withoutDeletedTask = tasks?.filter(task => task.id !== id);
      setTasks(withoutDeletedTask);
    }

    return (
        
        <div  className='bg-gradient-to-br from-[#000d29] to-[#000d29] flex items-start justify-between min-h-screen'>

{/* Add task by modal */}
{isOpen && <Modal setIsOpen={setIsOpen} setIsEditTask={setIsEditTask}><AddTask setIsOpen={setIsOpen} addTask={addTask}/></Modal>}

{/* Edit task by modal */}
{isEditTask && <Modal setIsOpen={setIsOpen} setIsEditTask={setIsEditTask}>
  <EditTask tasks={tasks} setTasks={setTasks} editableTask={editableTask} setIsEditTask={setIsEditTask}/>
  </Modal>}

         {/* Dashboard menu */}
             <div className='w-[200px] hidden lg:block bg-gradient-to-br from-[#132854] to-[#000d29] h-screen'>
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
             <div className='flex-1 px-6 py-6 h-screen '>

                {/* dashboard header */}
             <div className="flex bg-transparent backdrop-blur-2xl border- border-gray-400  rounded-lg items-center justify-between gap-4">
              <div>
                <p className="text-xs md:text-sm text-gray-300 font-thin">
                  Hello Ariful Islam
                </p>
                <h1 className="text-md md:text-4xl font-semibold text-gray-100">
                  You have got {tasks.length} task today.
                </h1>
              </div>
            
          
            </div>

             <div className='flex mt-6 items-center justify-between'>
                 {/* filter and sort wrap*/}
                 <div>
{/* Sort by priority, assignee, status */}
              <div className='flex items-center gap-8'>
                <p>Filter By : </p>
                <div className='flex flex-wrap items-center gap-4'>
                    <input onChange={(e =>
                    setFilterByAssignee(e.target.value))
                    } className='px-5 py-2 bg-[#001f3e]' type="text" name="" placeholder='Assignee' id="" />
                    <select onChange={(e=>
                      setFilterByPriority(e.target.value))} className='px-5 py-2 bg-[#001f3e]' name="Priority" id="">
                        <option selected value="Priority" disabled>Priority</option>
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select>
                    <input onChange={(e) => {
                      setFilterByDate(e.target.value);
                    }} className='px-5 py-2 bg-[#001f3e]' type="date" name="" id="" />
                </div>
            </div>
            {/* Sort by priority */}
            <div className='flex items-center gap-8'>
                <p>Sort By : </p>
                <div className='flex flex-wrap items-center gap-4'>
                    
                    <select onChange={(e=>
                      setSortDirection(e.target.value))} className='px-5 py-2 bg-[#001f3e]' name="Priority" id="">
                        <option selected value="Priority" disabled>Priority</option>
                        <option value="ascending">P0 - P2</option>
                        <option value="descending">P2 - P0</option>
                    </select>
                 
                </div>
            </div>
                 </div>

            {/* Add task button*/}
                <button onClick={() => {
                    setIsOpen(!isOpen);
                }} className='px-5 py-2 text-sm font-semibold text-gray-800 bg-[#c0ff3a] rounded-sm'>Add new task</button>
             </div>


                {/* All Tasks */}

                <div className='flex flex-shrink-0 xl:flex-shrink-1  items-center overflow-x-scroll xl:overflow-x-visible justify-between mt-12 h-[60vh] gap-0'>
                    {taskTypes.map((type, index)=> 
                        <TaskList sortDirection={sortDirection} handleDeleteTask={handleDeleteTask} setIsEditTask={setIsEditTask}  
                        handleEditTask={handleEditTask} filterByAssignee={filterByAssignee} filterByDate={filterByDate} filterByPriority={filterByPriority} type={type} allTasks={tasks} key={index} heading={type}/>
                        )}
                </div>
                 <Outlet/>
             </div>
         </div>
    );
};

export default Dashboard;