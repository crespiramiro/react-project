import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Banner2() {
    return (
        <div className="w-full h-72 mt-3  bg-yellow-400 flex flex-col gap-y-6 items-center justify-center " >
            <h2 className="text-4xl font-bold " >Tell a Friend</h2>
            <div className="icons-container flex flex-row gap-x-4 lg:gap-x-8 text-black items-center justify-around ">
                <FaFacebookF className="lg:text-5xl text-3xl cursor-pointer " />
                <FaInstagram className="lg:text-5xl text-3xl cursor-pointer " />
                <FaXTwitter className="lg:text-5xl text-3xl cursor-pointer " />
                <FaWhatsapp className="lg:text-5xl text-3xl cursor-pointer " />
                <FaTelegramPlane className="lg:text-5xl text-3xl cursor-pointer " />
            </div>
        </div>
      );
}

export default Banner2;