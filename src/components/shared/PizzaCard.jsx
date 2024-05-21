import React from "react";
import { useState } from "react";
import { RiAddFill } from "react-icons/ri";
import { useEffect } from 'react';

const PizzaCard = (props) => {
  const { img, description, price, inventory, action } = props; 
 
  return (
    <div className="bg-[#1F1D2B] p-8 rounded-3xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory} Bowls available</p>
 
      <button className="text-purple-500 py-2 px-4 rounded-xl border border-gray-500 flex mt-3" onClick={action}>
       <RiAddFill className="text-2xl" /> Add to Car 
      </button>
    </div>
  );
};

export default PizzaCard;
