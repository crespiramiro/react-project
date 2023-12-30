import { AiOutlineClose } from "react-icons/ai";

export default function ShoppingCart({ cartState, handleCart}) {

    return (
        <div className={ cartState  ? 'z-50 fixed flex-col gap-y-6  right-0 top-0  w-[42%] h-full border-l-2 border-yellow-400 bg-white ease-in-out duration-500' : 'hidden fixed left-[-100%] '} >
                    <div className="title flex flex-row justify-between h-auto p-6 w-full bg-slate-700 text-white ">
                        <h2 className='font-semibold text-xl lg:text-3xl ' >Shopping Cart</h2>
                        <AiOutlineClose cursor={'pointer'} size={40}  onClick={handleCart} />
                    </div>
                </div>
    )

}