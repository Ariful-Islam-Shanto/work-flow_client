import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1280px] mx-auto px-[5%] md:px-[3%] lg:px-[2%]'>
            {children}
        </div>
    );
};

export default Container;