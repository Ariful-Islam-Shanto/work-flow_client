import React from "react";
import Container from "../Container/Container";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Hero = () => {
    const {user} = UseAuth();
    const navigate = useNavigate();

  return (
    <div className="bg-[#000b2a] flex items-center justify-between min-h-[80vh] relative">
     <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
         {/* Hero left content */}
      <div className="flex flex-col w-full items-start justify-between flex-1 pb-6 lg:pb-0">
        <h1 className="text-[36px] md:text-5xl leading-10 text-white font-bold">Let’s create a space <br/> For your <span className="text-transparent bg-gradient-to-tr from-[#cffd00] to-[#00FFA3] bg-clip-text">workflows</span></h1>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] mt-6 lg:mt-10 text-gray-300">Simplify task management with intuitive organization and <span className="block lg:inline"> seamless collaboration. Stay focused, achieve more.</span></p>
        <button onClick={() => {
            if(user) {
              navigate('/dashboard');
            }else{
              navigate('/login');
            }
        }} className="bg-gradient-to-tr mt-6 lg:mt-10 from-[#cffd00] to-[#00FFA3] px-8 py-3 rounded-[40px] w-full md:w-auto text-gray-900 font-bold text-sm">Get Started</button>
      </div>

      {/* Hero right content */}
      <div className="flex-1 flex items-center justify-end relative">
        <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711272159/Mask_group_1_h3j83j.png" alt="" className="w-[600px] relative z-10"/>
        <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711272710/Image_4_x91xdk.png" alt="" className="w-[140px] h- absolute z-0 top-[20%] left-0 "/>
        <img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711272692/Image_2_nbw5id.png" alt="" className="w-[140px] h- absolute z-0 top-[30%] right-[5%]"/>
      </div>
      </div>
     </Container>
    </div>
  );
};

export default Hero;
