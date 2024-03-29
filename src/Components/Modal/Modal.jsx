import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const Modal = ({children, setIsOpen, setIsEditTask}) => {
    return (
        <div className='h-screen max-w-[1280px] w-full z-10 fixed top-0 left-0 ' >
        <div className='absolute z-[5] w-full h-full bg-black opacity-60'></div>
            <div className="relative h-full z-10 flex items-center justify-center overflow-y-scroll">
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