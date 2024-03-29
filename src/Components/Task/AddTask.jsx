import React from "react";
import toast from "react-hot-toast";
import { v4 as Id } from "uuid";

const AddTask = ({ addTask, setIsOpen }) => {
  const handleAddTask = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get("title");
    const description = form.get("description");
    const team = form.get("team");
    const assignee = form.get("assignee");
    const priority = form.get("priority");
    const status = form.get("status");

    if (!title || !description || !team || !assignee || !priority || !status) {
      // setProcessing(false)
      return toast.error("Please fill the form correctly.");
    }
    console.log(title, description, team, assignee, priority, status);

    try {
      // Create a new Date object
      const today = new Date();

      // Get the year, month, and date separately
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero indexed
      const date = String(today.getDate()).padStart(2, "0");

      // Format the date in "YYYY-MM-DD" format
      const formattedDate = `${year}-${month}-${date}`;

      //? Create new task
      const newTask = {
        id: Id(),
        title: title,
        description: description,
        team: team,
        assignee: assignee,
        priority: priority,
        status: status,
        startDate: formattedDate,
      };

      addTask(newTask);
      setIsOpen(false);
      toast.success("Successfully Created New Task.");

      // }

      // Clear the form after successful submission
      e.target.reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="relative p-5 flex flex-col text-gray-700 bg-[#00253a] backdrop-blur-3xl h-full shadow-md w-full md:w-96 rounded-xl bg-clip-border">
        <div className="relative grid  text-white shadow-lg mb-4  place-items-center rounded-xl  shadow-gray-900/20">
          <h3 className="block font-sans md:text-xl lg:text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            <h1>Create a Task</h1>
          </h3>
        </div>
        <form onSubmit={handleAddTask}>
          <div className="flex flex-col gap-4 p-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                name="title"
                type="text"
                className="w-full h-full px-3 py-2 lg:py-3 font-sans md:text-[10px] lg:text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Title
              </label>
            </div>
            <div className="relative h-full w-full min-w-[200px]">
              <textarea
                className="w-full h-full px-3 py-3 font-sans md:text-[10px] lg:text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
                name="description"
                id=""
                cols="10"
                rows="5"
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Description
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="team"
                className="w-full h-full px-3 py-3 font-sans md:text-[10px] lg:text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Team
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                name="assignee"
                className="w-full h-full px-3 py-3 font-sans md:text-[10px] lg:text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-100 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-100 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-100 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-100 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-100">
                Assignee
              </label>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="relative h-auto w-full ">
                <select
                  className="w-full h-full px-3 py-3 font-sans md:text-[10px] lg:text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-400"
                  name="priority"
                  id=""
                >
                  <option selected disabled>
                    Priority
                  </option>
                  <option value="p0">P0</option>
                  <option value="p1">P1</option>
                  <option value="p2">P2</option>
                </select>
              </div>
              <div className="relative h-auto w-full ">
                <select
                  className="w-full h-full px-3 py-3 font-sans md:text-[10px] lg:text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-gray-50 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-400"
                  name="status"
                  id=""
                >
                  <option selected disabled>
                    Status
                  </option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Deployed">Deployed</option>
                  <option value="Deferred">deferred</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-[#c0ff3a] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-800 shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Create a task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
