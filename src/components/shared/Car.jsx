import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";
 import { useState } from "react";
 
const Car = (props) => {
  const { showCar, setShowCar, orderProducts, onButtonClick } = props;
  const [option, setOption] = useState(0); 

  const getTotal = () =>{
    var result = 0;
    orderProducts?.map((product) => {
      result+= product.price;
    })
    return result;
  }
  const handleClick = (id) => { 
    onButtonClick(id);
  };

  if(orderProducts.length == 0)
    setShowCar(false)
 
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showCar ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowCar(false)}
          className="absolute right-4 top-4 p-3 box-content cursor-pointer text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orders #151416</h1>
        {/* Pills */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className={option == 0 ? "bg-purple-800 text-white py-2 px-4 rounded-xl": "text-purple-500 border-gray-500 border py-2 px-4 rounded-xl"} onClick={()=>setOption(0)}>
            Dine In
          </button>
          <button className={option == 1 ? "bg-purple-800 text-white py-2 px-4 rounded-xl": "text-purple-500 border-gray-500 border py-2 px-4 rounded-xl"} onClick={()=>setOption(1)}>
            To Go
          </button>
          <button className={option == 2 ? "bg-purple-800 text-white py-2 px-4 rounded-xl": "text-purple-500 border-gray-500 border py-2 px-4 rounded-xl"} onClick={()=>setOption(2)}>
            Delivery
          </button>
        </div>
        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll scrollbar" id="style-scroll">
           {/* Product */}

            {orderProducts?.map((product) => {
              return (
                <div
                  className="bg-[#262837] p-4 rounded-xl mb-4"
                  key={product.image}
                >
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img
                        src={product.image}
                        className="w-10 h-10 object-cover"
                      />
                      <div>
                        <h5 className="text-sm">{product.product}</h5>
                        <p className="text-xs text-gray-500">{product.price}</p>
                      </div>
                    </div>
                    {/* Qty */}
                    <div className="ml-3">
                      <span>{product.count}</span>
                    </div>
                    {/* Price */}
                    <div className="ml-1">
                      <span>${product.price}</span>
                    </div>
                  </div>
                  {/* Note */}
                  <div className="grid grid-cols-6 items-center">
                    <form className="col-span-5">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                        placeholder="Order note..."
                      />
                    </form>
                    <div>
                      <button className="border border-purple-500 p-2 rounded-lg" onClick={() => handleClick(product.id)}>
                        <RiDeleteBin6Line className="text-purple-500" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>${getTotal()}</span>
          </div>
          <div>
            <button className="bg-purple-800 w-full py-2 px-4 rounded-lg">
              Continue to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
