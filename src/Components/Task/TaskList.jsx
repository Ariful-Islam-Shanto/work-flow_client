import React from 'react';

const TaskList = ({heading, allTasks}) => {

    return (
        <div className='h-full w-full border-[1px] border-[#e1e1e1]'>
            <div className='py-2 px-5 bg-[#001f3e] text-center w-full text-white'><h3 className='text-sm font-semibold '>{heading}</h3></div>
        </div>
    );
};

export default TaskList;