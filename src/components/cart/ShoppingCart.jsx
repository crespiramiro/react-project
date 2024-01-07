import { AiOutlineClose } from "react-icons/ai";
import { useReducer } from "react";
import { cartInitialState, cartReducer } from "@/reducer/Reducer";
import { TYPES } from "@/actions/actions";
import { useCart } from "./UseCart";
import CartItem from "./CartItem";

export default function ShoppingCart({ cartState, handleCart}) {

    const {cart, clearCart, removeFromCart} = useCart()

    const deleteFromCart = (id, all = false) => {

        console.log(id, all)

        if (all) {
            dispatch({ type: TYPES.REMOVER_TODOS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVER_UN_PRODUCTO, payload: id })
        }
    };


    return (
        <div className={ cartState  ? 'z-50 fixed flex-col gap-y-6  right-0 top-0  w-[42%] h-full border-l-2 border-yellow-400 bg-white ease-in-out duration-500' : 'hidden fixed left-[-100%] '} >
                    <div className="title flex flex-row justify-between h-auto p-6 w-full bg-slate-700 text-white ">
                        <h2 className='font-semibold text-xl lg:text-3xl ' >Shopping Cart</h2>
                        <AiOutlineClose cursor={'pointer'} size={40}  onClick={handleCart} />
                    </div>
                    <button onClick={clearCart} >Limpiar Carrito</button>
            <div>
                {cart.map((producto, index) => <CartItem key={index}
                  producto={producto} removeFromCart={removeFromCart} />)}
            </div>
                </div>
    )

}