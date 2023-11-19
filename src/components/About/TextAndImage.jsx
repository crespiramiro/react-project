import { AiOutlineThunderbolt } from "react-icons/ai";

function TextAndImage() {
    return (
        <div className=" flex flex-col md:flex-row px-8 gap-y-2 lg:gap-x-16" >
            <div className="text-container mx-2 ml-3 md:ml-8 md:mx-2 flex flex-col justify-evenly gap-y-3  " >
            <h2 className="text-2xl lg:text-4xl text-start font-bold mt-2 pt-1 pb-2 " >Cultivating <span className="text-yellow-400" >Distinction</span> in Attire</h2>
            <p className=" text-lg pb-2 lg:text-3xl text-start" >Our mission is to redefine fashion, infusing each design with creativity and sophistication. Why ?</p>
            <ul className="space-y-2 lg:text-xl  list-none  " >
                <li className="flex gap-x-2 " > <AiOutlineThunderbolt className=" text-md lg:text-lg" /> Because it celebrates individual expression, allowing everyone to wear their stories with pride</li>
                <li className="flex gap-x-4 " > <AiOutlineThunderbolt className=" text-md lg:text-lg" /> Because it empowers local talent, driving economic vibrancy through collaborative design</li>
                <li className="flex gap-x-4 " > <AiOutlineThunderbolt className=" text-md lg:text-lg" /> Because it captures the pulse of our unique style, reflecting the diverse energy of our community</li>
                <li className="flex gap-x-4 " > <AiOutlineThunderbolt className=" text-md lg:text-lg" /> Because it envisions a future where fashion is a powerful canvas for positive change</li>
            </ul>     
            </div>
            <div className="img-container object-center lg:w-auto lg:h-auto ">
            <img src="about/about-us-img.jpg" alt="Avant Studios Img" className=" lg:w-[85%] object-center px-8 py-4 lg:py-8 lg:mt-2 " />
            </div>
        </div>
      );
}

export default TextAndImage;