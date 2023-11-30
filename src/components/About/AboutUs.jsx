import ColumnContainer from "./ColumnContainer";
import TextAndImage from "./TextAndImage";



function AboutUs() {
    return ( 
        <section id="about" className="w-full h-full bg-sblue-400 flex flex-col  mt-1 md:mt-4 md:mb-2 mb-4  pt-1 md:pt-4" >
            <h2 className="text-2xl lg:text-4xl text-center font-semibold mx-1 md:mx-2 pt-3 md:pt-6 " >Step into <span className="text-yellow-400" >Tomorrow's Style </span>with Avant Studios</h2>
               <ColumnContainer />
                <TextAndImage />
        </section>
     );
}

export default AboutUs;