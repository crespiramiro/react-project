"use client";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"] });
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import { useCart } from "../cart/UseCart";

export default function NewProducts({}) {
  const [productos, setProductos] = useState([]);
  
  const {addToCart} = useCart()

  const getData = async () => {
    const res = await axios.get("https://my-json-server.typicode.com/crespiramiro/avantp-api/productos");
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
        className={` uppercase text-4xl block font-bold hover:text-gray-600 pt-8 text-yellow-400 mb-6 ${orbitron.className} `}
      >
        New in
      </h2>
      <div className="w-full h-full grid grid-flow-row grid-cols-1 transition-all ease-in-out duration-300 md:grid-cols-2 sm:gap-y-3 sm:gap-x-2 gap-x-8 gap-y-2 lg:grid-cols-3 ">
        {productos.map((producto) => (
         <Product key={producto.id} producto={producto} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

