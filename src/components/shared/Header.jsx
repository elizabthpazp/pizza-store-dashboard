import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from "react";
const Header = ({selected}) => {
  const [option, setOption] = useState(0); 
  
  const sendData = (data) =>{
    setOption(data)
    selected(data)
  }

  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-gray-300">Delicious Pizzas</h1>
          <p className="text-gray-500">{new Date().toLocaleDateString().padStart(10, '0')}</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#" onClick={()=>sendData(0)}
          className={option == 0 ? "before:bg-purple-800 text-purple-500 py-2 pr-4 relative before:w-1/2 before:h-[2px] before:absolute before:left-0 before:rounded-full before:-bottom-[1px]" : "relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:left-0 before:rounded-full before:-bottom-[1px]"}
        >
          Hot pizzas
        </a>
        <a href="#" onClick={()=>sendData(1)} className={option == 1 ? "before:bg-purple-800 text-purple-500 py-2 pr-4 relative before:w-1/2 before:h-[2px] before:absolute before:left-0 before:rounded-full before:-bottom-[1px]" : "py-2 pr-4"}>
          Pineapple
        </a>
        <a href="#" onClick={()=>sendData(2)} className={option == 2 ? "before:bg-purple-800 text-purple-500 py-2 pr-4 relative before:w-1/2 before:h-[2px] before:absolute before:left-0 before:rounded-full before:-bottom-[1px]" : "py-2 pr-4"}>
           Mushroom 
        </a>
        <a href="#" onClick={()=>sendData(3)} className={option == 3 ? "before:bg-purple-800 text-purple-500 py-2 relative before:w-1/2 before:h-[2px] before:absolute before:left-0 before:rounded-full before:-bottom-[1px]" : "py-2"}>
           Vegetables
        </a>
      </nav>
    </header>
  );
};

export default Header;
