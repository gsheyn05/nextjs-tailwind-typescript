import React from "react";

import ProfPic from "../public/assets/GregProfile.jpg"
import Image from "next/image";
import ProfPic2 from "../public/assets/GregPortraitProfile.jpg"
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

type Props={
    items: any[]
}
let count=0;
export const Carousel = ({items}:Props)    =>{
    
    const featuredImages=items;

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleOnNextClick = () => {
        count = (count + 1) % featuredImages.length;
        setCurrentIndex(count);
      };

      const handleOnPrevClick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
      };



    return(
        <div className="max-w-screen-xl m-auto mt-3">
        <div className="w-full relative select-none ">
            
            <section className="flex justify-center">
          <Image className="mx-auto " src={featuredImages[currentIndex]}  height="300" width="300" />
          </section>
          
          <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
            
            <button className="bg-blue-600 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition" onClick={handleOnPrevClick}>
               
                <AiOutlineVerticalRight size={35} />
            </button>
            
            <button className="bg-blue-600 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"onClick={handleOnNextClick}>
                <AiOutlineVerticalLeft size={35} />
            </button>
          
          </div>
        </div>
      </div>

    )
    

    
}