import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Container from '../Components/Container/Container';

const Main = () => {
    return (
        <div className='bg-[#1063ba]'>
           <Container>
           <Navbar/>
           </Container>
            <Outlet/>
        </div>
    );
};

export default Main;