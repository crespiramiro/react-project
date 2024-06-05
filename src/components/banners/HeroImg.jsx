
function HeroImg() {
    return ( 
        <section className="z-10" >
        <div className="w-full h-[45rem] grayscale  bg-cover bg-center " style={{backgroundImage: "url('about/hero-img.jpeg')"}}  >
            <div className="banner-text w-1/3 h-full justify-start  flex flex-col gap-y-6 py-32 pl-16 ">
            <h2 className="text-5xl  relative h-[50px] text-left opacity-60   font-black text-white ">aaa</h2>
            <button className=" mt-32 w-fit self-center h-fit hover:shadow-2xl text-center border-2 border-white  rounded-xl p-4  " > 
                    <a href='#products 'className=" text-md whitespace-nowrap lg:text-xl text-white " >NEW IN</a>
            </button>
            </div>
        </div>
        </section>
        
     );
}

export default HeroImg;