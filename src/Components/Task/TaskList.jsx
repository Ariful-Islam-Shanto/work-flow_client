import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({handleDeleteTask, setIsEditTask,handleEditTask, heading, allTasks = [], type, filterByPriority, filterByDate, filterByAssignee, sortDirection}) => {


        // Define a priority map to assign numerical values to each priority level
        const priorityMap = {
            'p0': 0,
            'p1': 1,
            'p2': 2
        };
    
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


     // Sort tasks based on sortDirection (ascending or descending)
     specificTypeTasks.sort((taskA, taskB) => {
        const priorityA = priorityMap[taskA.priority];
        const priorityB = priorityMap[taskB.priority];

        // Determine sorting direction based on sortDirection variable
        if (sortDirection === 'ascending') {
            return priorityA - priorityB;
        } else if (sortDirection === 'descending') {
            return priorityB - priorityA;
        } else {
            // Default to ascending sorting if sortDirection is not provided or invalid
            return priorityA - priorityB;
        }
    });

    return (
        <div className='h-full rounded-lg w-full border-[1px] border-[#e1e1e11a]'>
            <div className='py-2 px-5 rounded-tl-lg rounded-tr-lg bg-[#01274d] text-center w-full text-white'><h3 className='text-sm font-semibold'>{heading}</h3></div>

            <div className="overflow-auto w-[300px] h-[300px] flex flex-col gap-4 px-6">
            {specificTypeTasks.map(task =>  
               <TaskItem handleDeleteTask={handleDeleteTask} setIsEditTask={setIsEditTask} handleEditTask={handleEditTask}  key={task.id} task={task} /> 
                )}
            </div>
        </div>
    );
};

export default TaskList;