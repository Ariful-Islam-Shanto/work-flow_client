import React from "react";

const Navbar = () => {

    const user = false;
  return (
    <div className="navbar bg-transparent min-h-[10vh]">
      <div className="flex-1">
        <a className=""><img src="https://res.cloudinary.com/debqyv4o6/image/upload/v1711266614/WorkflowLogo_adch3i.svg" alt="" /></a>
      </div>
      <div className="flex-none">
       {user === true ?  <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> : 
        <button className="px-8 py-3 text-sm font-bold text-white border-2 border-white rounded-[40px] hover:bg-white transition-all duration-200 ease-in-out hover:text-gray-900">Sign In</button>
    }
        </div>
    </div>
  );
};

export default Navbar;
