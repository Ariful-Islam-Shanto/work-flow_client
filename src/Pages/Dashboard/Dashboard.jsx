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
import Swal from 'sweetalert2';
import Header from '../../Components/Header/Header';

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

  //? Handle dashboard menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
      Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          const withoutDeletedTask = tasks?.filter(task => task.id !== id);
          setTasks(withoutDeletedTask);

          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: "Cancelled",
            text: "Your task is safe :)",
            icon: "error"
          });
        }
      });
     
    }

    return (
        <div className='bg-gradient-to-br from-[#000d29] to-[#000d29]'>
        <div  className='max-w-[1440px] mx-auto bg-gradient-to-br from-[#000d29] to-[#000d29] flex items-start justify-between min-h-screen'>

{/* Add task by modal */}
{isOpen && <Modal setIsOpen={setIsOpen} setIsEditTask={setIsEditTask}><AddTask setIsOpen={setIsOpen} addTask={addTask}/></Modal>}

{/* Edit task by modal */}
{isEditTask && <Modal setIsOpen={setIsOpen} setIsEditTask={setIsEditTask}>
  <EditTask tasks={tasks} setTasks={setTasks} editableTask={editableTask} setIsEditTask={setIsEditTask}/>
  </Modal>}

         {/* Dashboard menu */}
             <div className={` w-[200px] transition-all duration-300 ease-in-out fixed lg:relative z-[9999] top-0 ${isMenuOpen === false ? '-left-[100%] lg:left-[0%]' : ''} ${isMenuOpen === true ? 'left-[0%] lg:left-[0%]' : ''} lg:block bg-gradient-to-br from-[#132854] to-[#000d29] min-h-screen`}>

             <div className=" lg:hidden relative h-full z-[10000] flex items-center justify-center ">
            <button className='absolute top-[80vh] right-[38%] px-3 py-3 text-lg text-white rounded-full z-[10000]  bg-[#001f3e] hover:bg-[#122a5e]' onClick={() =>
            {setIsMenuOpen(false)}
            }><RxCross2/></button>
            </div>



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

             {/* Dashboard Content */}
             <div className='flex-1 flex flex-col items-start justify-between overflow-hidden w-full px-6 pt-6 min-h-screen '>

                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} tasks={tasks}/>

  {/* filter wrap*/}
             <div className='flex w-full mt-6 items-center justify-between'>
               
                 <div className=''>
                {/* Filter by priority, assignee, status */}
                <div className='flex items-center gap-8'>
                <p className=''>Filter By :</p>
                <div className='flex flex-wrap items-center gap-4'>
                    <input onChange={(e =>
                    setFilterByAssignee(e.target.value))
                    } className='px-2 text-[10px] lg:text-[14px] md:px-3 lg:px-5 py-2 bg-[#001f3e] w-[70px] lg:w-auto' type="text" name="" placeholder='Assignee' id="" />
                    <select onChange={(e=>
                      setFilterByPriority(e.target.value))} className='px-2 text-[10px] lg:text-[14px] md:px-3 lg:px-5 py-2 bg-[#001f3e]' name="Priority" id="">
                        <option selected value="Priority" disabled>Priority</option>
                        <option value="p0">P0</option>
                        <option value="p1">P1</option>
                        <option value="p2">P2</option>
                    </select>
                    <input onChange={(e) => {
                      setFilterByDate(e.target.value);
                    }} className='px-2 text-[10px] lg:text-[14px] md:px-3 lg:px-5 py-2 bg-[#001f3e]' type="date" name="" id="" />
                </div>
            </div>
                 </div>

            <div className='hidden lg:flex items-center justify-end'>
              {/* Add task button*/}
              <button onClick={() => {
                    setIsOpen(!isOpen);
                }} className='px-5 py-2 text-sm font-semibold text-gray-800 bg-[#c0ff3a] rounded-sm'>Add new task</button>
            </div>
             </div>

              {/* Sort by priority */}
            <div className='flex mt-6 items-center gap-8'>
                <p>Sort By: </p>
                <div className='flex flex-wrap items-center gap-4'>
                    
                    <select onChange={(e=>
                      setSortDirection(e.target.value))} className='px-2 text-[10px] lg:text-[14px] md:px-3 lg:px-5 py-2 bg-[#001f3e]' name="Priority" id="">
                        <option selected value="Priority" disabled>Priority</option>
                        <option value="ascending">P0 - P2</option>
                        <option value="descending">P2 - P0</option>
                    </select>
                 
                </div>
            </div>


                {/* All Tasks */}
                <div className='flex flex-shrink-0 xl:flex-shrink-0  items-center overflow-x-scroll xl:overflow-x-scroll justify-between  w-full mt-12 h-auto xl:h-[60vh] gap-8'>
                    {taskTypes.map((type, index)=> 
                        <TaskList sortDirection={sortDirection} handleDeleteTask={handleDeleteTask} setIsEditTask={setIsEditTask}  
                        handleEditTask={handleEditTask} filterByAssignee={filterByAssignee} filterByDate={filterByDate} filterByPriority={filterByPriority} type={type} allTasks={tasks} key={index} heading={type}/>
                        )}
                </div>
                {/* Add task button */}
                <div className='block w-full lg:hidden'>
                  
              <button onClick={() => {
                    setIsOpen(!isOpen);
                }} className='px-5 my-6  py-2 w-full text-sm font-semibold text-gray-800 bg-[#c0ff3a] rounded-sm'>Add new task</button>
                </div>
                 <Outlet/>
             </div>
         </div>
         </div>
    );
};

export default Dashboard;