import ColumnCard from "./ColumnCard";
import { AiOutlineBulb, AiOutlineShopping } from "react-icons/ai";
import { BiPalette } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";

function ColumnContainer() {
    return ( 
        <div className=" mx-8 my-4 justify-between md:mt-8 md:mx-12 md:my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 " >
               <ColumnCard icon={<AiOutlineBulb className=" text-5xl"  />} title='Innovation Unleashed' p='Immerse yourself in a realm of creativity and avant-garde style at Avant Studios. Our vision transcends conventional boundaries merging cutting-edge aesthetics with enduring elegance.' />
               <ColumnCard icon={<AiOutlineShopping className=" text-5xl"  />} title='Fashion Beyond Limits' p='Avant Studios invites you to discover unrestricted fashion, where each piece is a testament to timeless elegance and individuality beyond the ordinary.' />
               <ColumnCard icon={<BiPalette className=" text-5xl"  />} title='Shop Tomorrow, Today' p="Experience the future of fashion with current trends that redefine your wardrobe. Step into a world where style converges with enduring allure." />
               <ColumnCard icon={<GrCertificate className=" text-5xl" />}  title='Quality Redifined' p='At Avant Studios, we redefine quality standards, ensuring each piece is crafted with meticulous precision and unwavering excellence. Elevate your wardrobe with garments that stand as timeless expressions of elegance.' /> 
        </div>
     );
}

export default ColumnContainer;