import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ['latin'] })

function Footer() {
    return ( 
        <div className="w-full h-screen md:h-[25rem] flex flex-col gap-y-8 md:gap-y-0 md:flex-row items-start gap-x-16 mb-4 pt-12 px-12 " >
            <h2 className={`text-xl md:text-3xl font-extrabold ${orbitron.className} `} >Avant Studios</h2>
           <div className="ul-container flex flex-col md:flex-row gap-x-16  ">
                <ul className="text-sm md:text-xl  flex flex-col gap-y-8 md:gap-y-4" >
                    <li className="font-semibold" >Collections</li>
                    <li>Fall</li>
                    <li>Winter</li>
                    <li>Spring</li>
                    <li>Summer</li>
                </ul>
                <ul className=" text-sm md:text-xl flex flex-col gap-y-8 md:gap-y-4" >
                    <li className="font-semibold" >All Categories</li>
                    <li>Men's Apparel</li>
                    <li>Women's Apparel</li>
                    <li>Accesories</li>
                </ul>
                <ul className=" text-sm md:text-xl flex flex-col gap-y-8 md:gap-y-4 pb-8 " >
                    <li className="font-semibold" >Collaborations and Designers</li>
                    <li>Our Collaboration with <span className="italic font-semibold " >Éclat Atelier</span></li>
                    <li>Ramiro Crespi, 2023</li>
                  </ul>
           </div>
        </div>
     );
}

export default Footer;
