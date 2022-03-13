import React from "react";

const App = () => {
  return (
    <div className="container mx-auto rounded p-1 drop-shadow-xl flex justify-around items-center mt-8">
      <h1 className="text-2xl font-bold drop-shadow-xl">Linkedin
      </h1>
      <ul className="flex gap-3 items-center">
        <li className="flex items-center">
          <a href="#" className="text-sm font-bold drop-shadow">Networks</a>
          <span className="ml-1 p-[3.5px] rounded-lg text-[8px] bg-orange-600 text-white">+12</span>
        </li>
        <li className="flex items-center">
          <a href="#" className="text-sm font-bold drop-shadow">Jobs</a>
          <span className="ml-1 p-[3.5px] rounded-lg text-[8px] bg-orange-600 text-white">2</span>
        </li>
      </ul>
      <ul className=" flex gap-3 items-center">
      <li className="flex items-center">
          <a href="#" className="text-sm font-bold drop-shadow">Messages</a>
          <span className="ml-1 p-[3.5px] rounded-lg text-[8px] bg-orange-600 text-white">+30</span>
        </li>
        <li className="flex items-center">
          <a href="#" className="text-sm font-bold drop-shadow">Notifications</a>
          <span className="ml-1 p-[3.5px] rounded-lg text-[8px] bg-orange-600 text-white">5</span>
        </li>
        <li className="flex items-center gap-1">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14GhlwqhYeG93A4AyeMPthAnGKevWeFNQ6E8DPLt1LA=s192-c-rg-br100"
            alt="avatar"
            className="rounded w-9"
          />
          <i class="fa-solid fa-angle-down"></i>
        </li>
      </ul>
    </div>
  );
};

export default App;
