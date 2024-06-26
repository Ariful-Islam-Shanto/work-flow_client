import { updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../../Firebase/firebase.config';
import toast from 'react-hot-toast';
import UseAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

    const {createUser} = UseAuth();
    const navigate = useNavigate();

        const handleRegistration = async (e) => {
            e.preventDefault();
        
            const form =  new FormData(e.target);
            const name = form.get('name');
            const email = form.get('email');
            const image = form.get('image');
            const password = form.get('password');
        
            if (!name || !email || !password || !image) {
              // setProcessing(false)
              return toast.error("Please fill the form correctly.");
            }
            console.log(name, email, image, password);
        
        
        
            try {
              
                // //? Now create user
                const user = await createUser(email, password);
                console.log('created user',user);
        
                // //? if user is successfully created then update the profile.
                if (user) {
                 
                  await updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: image,
                  });
        
              
                  // setProcessing(false)
                  toast.success("Successfully Created Account.");
                  navigate("/dashboard");
        
                // }
            
        
              // Clear the form after successful submission
              e.target.reset();
            }
           } catch (error) {
              console.error("Error:", error);
              toast.error(error.message);
            }
        
        }
        
    return (
        <div className="relative h-full p-5 flex flex-col text-gray-700 bg-[#000000] backdrop-blur-3xl shadow-md w-96 rounded-xl bg-clip-border">
  <div
    className="relative grid  text-white shadow-lg mb-4  place-items-center rounded-xl  shadow-gray-900/20">
    <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
      Sign Up
    </h3>
  </div>
  <form onSubmit={handleRegistration}>
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      name='name'
      type='text'
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder="" />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Name
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      type='email'
      name='email'
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder="" />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      type='text'
      name='password'
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Password
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input
      type='text'
      name='image'
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" " />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100">
        Image URL
      </label>
    </div>
    
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-[#8eff56] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="submit">
      Sign Up
    </button>
   
  </div>
  </form>
</div>
    );
};

export default RegisterForm;