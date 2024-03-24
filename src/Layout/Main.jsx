import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Container from '../Components/Container/Container';

const Main = () => {
    return (
        <div className='bg-[#000b2a]'>
           {/* <Container>
           <Navbar/>
           </Container> */}
            <Outlet/>
        </div>
    );
};

export default Main;