import React from 'react';

const TaskList = ({heading, allTasks}) => {

    return (
        <div className='h-full w-full bg-white'>
            <div className='py-2 px-5 bg-[#262626] text-center w-full text-white'><h1 className='text-xl font-semibold '>{heading}</h1></div>
        </div>
    );
};

export default TaskList;