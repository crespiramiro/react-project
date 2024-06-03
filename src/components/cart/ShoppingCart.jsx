import { AiOutlineClose } from "react-icons/ai";
import { useCart } from "./UseCart";
import { CartItem } from "./CartItem";

export default function ShoppingCart({ cartState, handleCart}) {

    const {cart, clearCart, removeFromCart} = useCart()

    return (
        <div className={ cartState  ? 'z-50 fixed  flex flex-col right-0 top-0  w-[42%] h-full border-l-2 border-yellow-400 bg-white transition-all ease-in-out duration-500 gap-y-4 ' : 'hidden fixed left-[-100%] '} >
                    <div className="title flex flex-row justify-between h-auto p-6 w-full">
                        <h2 className='font-semibold text-xl lg:text-3xl ' >Shopping Cart</h2>
                        <AiOutlineClose cursor={'pointer'} size={40}  onClick={handleCart} />
                    </div>
                    <button onClick={clearCart} className="p-4 rounded-xl hover:bg-gray-500/10 self-center " >Clear cart</button>
            <div className=" flex flex-col gap-y-8 overflow-y-scroll pb-16 " >
                {cart.map((producto, index) => <CartItem key={index}
                  producto={producto} removeFromCart={removeFromCart} />)}
            </div>
                </div>
    )

}