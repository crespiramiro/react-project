"use client";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"] });
import axios from "axios";
import { useState, useEffect } from "react";

export default function NewProducts() {
  const [productos, setProductos] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5050/productos");
    const products = await res.data;
    setProductos(res.data);
    console.log(products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section id="products" className=" w-full h-auto md:mt-10 mt-6 mb-4 md:mb-8 mr-1 px-2 text-center  ">
      <h2
        className={` uppercase text-4xl font-bold hover:text-gray-600 pt-8 text-yellow-400 mb-6 ${orbitron.className} `}
      >
        New in
      </h2>
      <div className="w-full h-full grid grid-flow-row grid-cols-1  md:grid-cols-2 sm:gap-y-3 sm:gap-x-2 gap-x-8 gap-y-2 lg:grid-cols-3 ">
        {productos.map((producto) => (
          <div key={producto.id}
            className={`products h-auto  w-auto rounded-lg p-8 mx-12 my-2 group ${orbitron.className} `}
          >
            <div className="mb-2 relative group-hover:scale-125 ">
              <img
                src={producto.img}
                alt="{producto.product}"
                className="w-auto h-auto rounded-none mb-2  border-b-2 border-b-yellow-400  "
              />
              <h2 className="mb-2  ">{producto.product}</h2>
              <div className="price mb-2 flex flex-row justify-center gap-x-1 lg:gap-x-2 ">
                <h2 className="text-lg font-extralight ">{producto.price}</h2>
                <h3 className="text-md text-gray-400 line-through ">
                  {producto.oldPrice}
                </h3>
              </div>
              <button
                id="buybtn"
                className="group-hover:bg-yellow-400  bg-white p-3 rounded-md  text-center w-[5rem] lg:w-[6rem] h-[3.5rem] "
              >
                <h2 className="group-hover:text-white text-black text-center  text-sm lg:text-md font-semibold ">
                  Add to Cart
                </h2>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

