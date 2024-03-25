import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1280px] mx-auto px-[0%] md:px-[5%]'>
            {children}
        </div>
    );
};

export default Container;