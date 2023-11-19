import Products from "./Products";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ['latin'] })

function CardsContainer() {
    return ( 
        <section className=" w-full h-auto md:mt-10 mt-6 mb-4 md:mb-8 mr-1 px-2 text-center  " >
            <h2 className={` uppercase text-4xl font-bold hover:text-gray-600  text-yellow-400 mb-8 ${orbitron.className} ` }>New in</h2>
            <div className="w-full h-full grid grid-flow-row grid-cols-1  md:grid-cols-2 sm:gap-y-3 sm:gap-x-2 gap-x-8 gap-y-2 lg:grid-cols-3 " >
                <Products img='products/jacket.jpg' product='Denim Jacket' price='$1899,99' oldPrice='2480,99'  />
                <Products  img='products/longcoat2.jpg' product='Long Coat' price='$2800' oldPrice='3455'     />
                <Products  img='products/sunglasses.jpg' product='Sunglasses' price='$570,99' oldPrice='899,99'     />
                <Products  img='products/denim-jacket.jpg' product='Fur Jacket' price='$2720,99' oldPrice='3040'     />
                <Products  img='products/pants.jpg' product='Flared Pants' price='$1549,99' oldPrice='2120,99'     />
                <Products  img='products/coat.jpg' product='Coat' price='$3280,99' oldPrice='3650'     />
                <Products  img='products/shoes.jpg' product='Boots' price='$690,99' oldPrice='980'     />
                <Products  img='products/bag.jpg' product='Bag' price='$690' oldPrice='1099,99'     />
                <Products  img='products/jeans.jpg' product='Jeans' price='$890' oldPrice='1200'     />
            </div>
        </section>
     );
}

export default CardsContainer;