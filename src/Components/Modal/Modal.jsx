import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({children, setIsOpen, setIsEditTask}) => {
    return (
        <div className='h-[150vh] lg:h-screen w-full z-10 absolute lg:fixed top-0 left-0 overflow-scroll' >
        <div className='absolute z-[5] w-full h-full bg-black opacity-60'></div>
            <div className="relative h-full z-10 flex items-center justify-center overflow-y-auto">
                {children}
            <button className='absolute top-5 right-5 px-3 py-3 text-lg text-black rounded-full bg-white' onClick={() =>
            {setIsOpen(false)
            setIsEditTask(false)}
            }><RxCross2/></button>
            </div>
    </div>
    );
};

export default Modal;