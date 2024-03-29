import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({tasks = [], setIsMenuOpen, isMenuOpen}) => {

    const {user} = UseAuth();

    return (
        <div className="flex  w-full bg-transparent backdrop-blur-2xl border- border-gray-400  rounded-lg items-center justify-between gap-4">

            {/* Hamburger menu */}
            <button onClick={() => {
                setIsMenuOpen(!isMenuOpen);
            }} className='p-3 block lg:hidden bg-[#001f3e] hover:bg-[#122a5e] rounded-md text-lg '>
                <GiHamburgerMenu/>
            </button>
        <div>
          <p className="text-xs md:text-sm text-gray-300 font-thin">
            Hello {user?.displayName}
          </p>
          <h1 className="text-md md:text-4xl font-semibold text-gray-100">
            You have got {tasks.length} task today.
          </h1>
        </div>
      
        {user &&  <div className="dropdown dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle avatar"
    >
      <div className="w-10 rounded-full">
        {user?.photoURL ?  <img
          alt="Tailwind CSS Navbar component"
          src={user?.photoURL}
        />: 
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg?t=st=1711742063~exp=1711745663~hmac=ee55fa113fc083607ea6f793753ed3b203fbb3b808de5e99c934b79ead56a317&w=740"
        /> }
      </div>
    </div>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[9999] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>{user?.displayName}</a>
        <a>{user?.email}</a>
      </li>
      <li>
      </li>
    </ul>
  </div> 
}
    
      </div>
    );
};

export default Header;