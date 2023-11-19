import { GiTie } from "react-icons/gi";

function Banner() {
    return ( 
        <div className="w-full h-full text-white bg-stone-900 " >
            <div className=" w-full h-96  flex flex-col items-center justify-around " >
                <h2 className=" text-lg lg:text-2xl  text-center " >Explore the magic of our creative collaboration with <span className="italic" >Éclat Atelier</span></h2>
                <div className="logo flex flex-col items-center ">
                    <GiTie  className="text-5xl" />
                    <h2 className="italic text-xl lg:text-5xl " >Éclat Atelier</h2>
                </div>
                <button className="rounded-md bg-yellow-400 p-4 text-xl text-black " >
                    <p>Discover <span className="italic" >Éclat Atelier</span></p>
                </button>
            </div>
        </div>
     );
}

export default Banner;