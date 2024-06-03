import { GoTrash } from "react-icons/go"

export function CartItem ({producto, removeFromCart}) {

    let {product, img, price, quantity} = producto


    return (
        <div className="cart-item flex flex-row justify-around items-center ">
           <div className="flex flex-col gap-y-4 justify-center items-center h-auto " >
           <img src={img} alt={product} width={80} />
            <h4 className="font-semibold" >{product}</h4>
           </div>
          <div className="flex flex-col gap-y-10 h-full justify-end " >
            <button  className="text-center self-center flex hover:text-red-600 " onClick={()=>{removeFromCart(producto); console.log('Eliminando producto', producto);  }} ><GoTrash size={30} /></button>
          <h5>{price} x {quantity}</h5>

          </div>
        </div>
    );
}