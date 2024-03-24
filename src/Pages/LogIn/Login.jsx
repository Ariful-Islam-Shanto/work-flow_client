import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import LoginForm from "../../Components/Auth/LoginForm";
import RegisterForm from "../../Components/Auth/RegisterForm";

const Login = () => {

    const [activeTab, setActiveTab] = useState('login');

    // Change the active tab
    const handleTabChange = (event) => {
      setActiveTab(event.target.value);
    };

      // Calculate the position of the active tab indicator
  const indicatorPosition = {
    left: activeTab === 'login' ? '0%' : "50%"
  };
  
  return (
    <div className="min-h-screen flex items-center  justify-center">
        {/* <div className="flex items-center justify-between"> */}
          {/* <div className="flex-1">
            <h1 className="text-4xl text-white font-bold">
                Welcome back!
            </h1>
            <img
              src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711300386/Image_1_1_xxg5qf.png"
              alt=""
            />
          </div> */}
          
            {/* Tabs */}
            <div className=" px-[2%] w-full md:px-0 md:w-96 mx-auto">
      <div className="relative right-0">
       

        <ul
          className="relative mt-8 flex justify-between flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
          data-tabs="tabs"
          role="list"
        >
             {/* Active tab indicator */}
      <div className=" inline-block rounded-xl bg-gradient-to-tr from-[#f7fbff] to-[#ffffff] absolute top-0 h-full transition-all duration-300 ease-in-out" style={{ width: '50%', ...indicatorPosition }} />

          <li className="z-30 flex-1 text-center">
            <label htmlFor="app" className="z-30 flex items-center justify-center w-full  px-0 py-2 mb-0 transition-all ease-in-out border-0 font-bold rounded-lg cursor-pointer text-slate-700 bg-inherit">
              <input
                type="radio"
                id="app"
                name="tabs"
                value="login"
                checked={activeTab === 'login'}
                onChange={handleTabChange}
                className="hidden"
              />
              <span className="mt-1 font-bold text-center">Log In</span>
            </label>
          </li>
          <li className="z-30 flex-1 text-center">
            <label htmlFor="message" className="z-30 flex items-center justify-center w-full font-bold px-0 py-2 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit">
              <input
                type="radio"
                id="message"
                name="tabs"
                value="register"
                checked={activeTab === 'register'}
                onChange={handleTabChange}
                className="hidden"
              />
              <span className="ml-1 text-center">Register</span>
            </label>
          </li>
        </ul>
        <div data-tab-content="" className="p-5">
          <div className={activeTab === 'login' ? 'block opacity-100 ' : 'hidden opacity-0'} id="login" role="tabpanel">
            <LoginForm/>
          </div>
          <div className={activeTab === 'register' ? 'block opacity-100' : 'hidden opacity-0'} id="register" role="tabpanel">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
         
          {/* </div> */}
        {/* </div> */}

    </div>
  );
};

export default Login;
