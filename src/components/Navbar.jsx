import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai'
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ['latin'] })

 
function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setCart(false)
    }

    const [cart, setCart] = useState(false)

    const handleCart = () => {
        setCart(!cart)
        setNav(false)
    }

    return ( 
        <nav className={` w-full h-auto flex flex-row justify-between lg:flex-row lg:justify-between items-center   px-4 lg:px-10 lg:py-3 pt-4 ${orbitron.className} ` }>
            <div className="img-container">
                <h1 className="text-4xl sm:pl-1 font-extrabold sm:my-6 py-3 lg:my-0 " > Avant Studios</h1>
            </div> 
                <ul className="hidden lg:flex lg:flex-row lg:justify-center lg:py-5 lg:gap-y-2 lg:gap-x-8 font-semibold text-2xl text-center " >
                    <li className='hover:text-yellow-400' ><a href="#">Home </a></li>
                    <li className='hover:text-yellow-400' ><a href="#about">About Us</a></li>
                    <li className='hover:text-yellow-400' ><a href="#">Contact</a></li>
                </ul>
                <ul className="icon-container lg:flex lg:flex-row justify-center gap-x-1 pt-2 lg:gap-x-4 lg:text-2xl px-2 hidden">
                    <li className='h-auto border-2 rounded-full p-3 border-slate-600 hover:border-yellow-400 ' ><a  href="#"> <AiOutlineUser/>   </a></li>
                    <li className='h-auto border-2 rounded-full p-3 border-slate-600 hover:border-yellow-400 ' ><a  href="#"> <AiOutlineSearch/> </a></li>
                    <li onClick={handleCart} className='h-auto border-2 rounded-full p-3 border-slate-600 hover:border-yellow-400 ' ><a  href="#"> <AiOutlineShoppingCart/> </a></li>
                </ul>
                <div className='block lg:hidden text-3xl ' onClick={handleNav}  >
                    {nav ? <AiOutlineClose/>: <AiOutlineMenu/> }
                </div>
                <div className={ cart  ? 'z-50 fixed flex-col gap-y-6  right-0 top-0  w-[42%] h-full border-l-2 border-yellow-400 bg-white ease-in-out duration-500' : 'hidden fixed left-[-100%] '} >
                    <div className="title flex flex-row justify-between h-auto p-6 w-full bg-slate-700 text-white ">
                        <h2 className='font-semibold text-xl lg:text-3xl ' >Shopping Cart</h2>
                        <AiOutlineClose cursor={'pointer'} size={40}  onClick={handleCart} />
                    </div>
                </div>



                <nav className={nav ? ' z-50 fixed flex-col gap-y-6 p-6 left-0 top-0  w-[82%] h-full border-r-2 border-yellow-400 bg-white ease-in-out duration-500 ' : ' hidden fixed left-[-100%]' } >
                    <h2 className=' text-4xl font-extrabold' > Avant Studios </h2>
                    <ul className='uppercase pt-4 mt-2 ' >
                        <li className='py-6 text-2xl ' ><a href="#">Home</a></li>
                        <li className='py-6 text-2xl ' ><a href="#">About Us</a></li>
                        <li className='py-6 text-2xl ' ><a href="#">Contact</a></li>
                    </ul>
                    <ul className="icon-container lg:hidden flex flex-row gap-x-4 pt-4 mt-2  text-2xl md:text-4xl ">
                    <li className='h-auto w-fit border-2 rounded-full p-4 border-slate-600 ' ><a  href="#"> <AiOutlineUser/>   </a></li>
                    <li className='h-auto w-fit border-2 rounded-full p-4 border-slate-600 ' ><a  href="#"> <AiOutlineSearch/> </a></li>
                    <li onClick={handleCart} className='h-auto w-fit border-2 rounded-full p-4 border-slate-600 ' ><a  href="#"> <AiOutlineShoppingCart/> </a></li>
                </ul>
                </nav>
        </nav>
     );
}



export default Navbar;
