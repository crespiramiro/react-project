import SliderImg from "./SliderImg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Slider() {

        const slideLeft = () => {
            let slider = document.getElementById('slider')
            slider.scrollLeft = slider.scrollLeft - 500
        }

        const slideRight = () => {
            let slider = document.getElementById('slider')
            slider.scrollLeft = slider.scrollLeft + 500
        }

    return ( 
        <section className="mt-3 mb-3" > 
            <h2 className=" p-3 text-center text-xl lg:text-4xl font-bold " ><span className="underline text-yellow-400 cursor-pointer ">@AvantStudios</span> on Instagram</h2>
        <div className=" w-full h-full relative flex items-center ">
            <MdChevronLeft className="opacity-50 cursor-pointer hover:opacity-100 " onClick={slideLeft} size={40} />
        <div id="slider" className="w-full flex flex-row h-full overflow-y-hidden overflow-x-hidden scroll whitespace-nowrap scroll-smooth " >
            <SliderImg img='slider/1.avif' />
            <SliderImg img='slider/2.avif' />
            <SliderImg img='slider/3.avif' />
            <SliderImg img='slider/4.avif' />
            <SliderImg img='slider/5.avif' />
            <SliderImg img='slider/6.avif' />
            <SliderImg img='slider/7.avif' />
            <SliderImg img='slider/8.avif' />
            <SliderImg img='slider/9.avif' />
            <SliderImg img='slider/10.avif' />
            <SliderImg img='slider/11.avif' />
            <SliderImg img='slider/12.avif' />
            <SliderImg img='slider/13.avif' />
            <SliderImg img='slider/14.avif' />
            <SliderImg img='slider/15.avif' />
        </div>
        <MdChevronRight className="opacity-50 cursor-pointer hover:opacity-100 "  onClick={slideRight} size={40} />
        </div>
        </section>
     );
}

export default Slider;