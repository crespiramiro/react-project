import { Orbitron } from "next/font/google";
import { useCart } from "../cart/UseCart";
const orbitron = Orbitron({ subsets: ["latin"] });

export default function Product({producto}){
    const { addToCart } = useCart();    

    return (

<div 
className={`products h-auto  w-auto rounded-lg p-8 mx-12 my-2 group ${orbitron.className} `}
>
<div className="mb-2 relative group-hover:scale-110 transition-all ease-in-out duration-300 ">
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
  onClick={() => {
    addToCart(producto);
    console.log('Producto añadido al carrito:', producto,);
  }}
    id="buybtn"
    className="group-hover:bg-yellow-400  transition-all ease-in-out duration-150 bg-white p-3 rounded-md  text-center w-[5rem] lg:w-[6rem] h-[3.5rem] "
  >
    <h2 className="group-hover:text-white transition-all ease-in-out duration-150 text-black text-center  text-sm lg:text-md font-semibold ">
      Add to Cart
    </h2>
  </button>
</div>
</div>
    )
}