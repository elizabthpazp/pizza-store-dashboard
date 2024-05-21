import { useState } from "react";
import { productsList } from "../utils";

import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import PizzaCard from "./components/shared/PizzaCard";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showCar, setShowCar] = useState(false);
  let [listProductsOrder, setListOrder] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  let originalList = productsList;

  let [originalProducts, setListOriginal] = useState(originalList);

  const selected = (data) => {
    if (data == 0)
      originalList = originalList.filter((item) => item.id !== null);
    else if (data == 1)
      originalList = originalList.filter((item) => item.pineapple);
    else if (data == 2)
      originalList = originalList.filter((item) => item.mushroom);
    else if (data == 3)
      originalList = originalList.filter((item) => item.vegetables);
    setListOriginal(originalList);
  };

  const addProductToOrder = (product, index) => {
    if (showCar == false) setShowCar(!showCar);
    var listTemp = listProductsOrder;
    if (listTemp.length == 0) listTemp.push(product);
    else {
      listTemp.map((product1, i) => {
        if (product1.id == product.id) {
          listTemp[i].count += 1;
          return true;
        } else {
          listTemp.push(product);
          return true;
        }
      });
    }
    var listOriginalTemp = originalProducts;
    listOriginalTemp[index].countAvailable -= 1;

    setListOriginal(listOriginalTemp);
    setListOrder(listTemp);
  };

  const deleteProduct = (id) => {
    listProductsOrder = listProductsOrder.filter((item) => item.id !== id);
    setListOrder(listProductsOrder);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {showCar ? (
        <Car
          showCar={showCar}
          setShowCar={setShowCar}
          orderProducts={listProductsOrder}
          onButtonClick={deleteProduct}
        />
      ) : (
        <></>
      )}

      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrders} className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main
        className={
          showCar ? "lg:pl-32 lg:pr-96 pb-20" : "lg:pl-32 lg:pr-100 pb-20"
        }
      >
        <div className="md:p-8 p-4">
          <Header selected={selected} />

          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Pizzas</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Add extra
            </button>
          </div>

          <div className="lg:p-8 xl:p-8 2xl:p-8 3xl:p-8 sm:p-0 xs:p-0 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {originalProducts.map((product, i) => {
              return (
                <PizzaCard
                  key={i}
                  img={product.image}
                  description={product.product}
                  price={product.price}
                  inventory={product.countAvailable}
                  action={() => addProductToOrder(product, i)}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
