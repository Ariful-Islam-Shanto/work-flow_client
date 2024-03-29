import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({handleDeleteTask, setIsEditTask,handleEditTask, heading, allTasks = [], type, filterByPriority, filterByDate, filterByAssignee}) => {

      // Filter tasks by type
      let specificTypeTasks = allTasks.filter(task => task.status === type);

      // Filter tasks by priority, if filterByPriority is provided
      if (filterByPriority) {
          specificTypeTasks = specificTypeTasks.filter(task => task.priority === filterByPriority);
      }

      // Filter tasks by date, if filterByDate is provided
    if (filterByDate) {
        specificTypeTasks = specificTypeTasks.filter(task => task.startDate === filterByDate);
    }

      // Filter tasks by date, if filterByDate is provided
    if (filterByAssignee) {
        specificTypeTasks = specificTypeTasks.filter(task => task.assignee === filterByAssignee);
    }

    return (
        <div className='h-full w-full border-[1px] border-[#e1e1e11a]'>
            <div className='py-2 px-5 bg-[#001f3e] text-center w-full text-white'><h3 className='text-sm font-semibold '>{heading}</h3></div>

            <div className="overflow-y-auto h-[300px] flex flex-col gap-4">
            {specificTypeTasks.map(task =>  
               <TaskItem handleDeleteTask={handleDeleteTask} setIsEditTask={setIsEditTask} handleEditTask={handleEditTask}  key={task.id} task={task} /> 
                )}
            </div>
        </div>
    );
};

export default TaskList;