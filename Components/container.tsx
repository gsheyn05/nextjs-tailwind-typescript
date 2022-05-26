import React from "react";
 //Due to REact 18 have to declare the children props in a interface first
interface CProps{
    children?:React.ReactNode;
}
//mx-auto centers container and px provided for horizontal padding(padding left and right)
//pb provides padding from the bottom of page (6 us 1.5rem (24px))
//px provided padding from the left and right 
//MAX-W Utilities for setting the maximum width of an element. MAX-W-2XL IS max-width: 42rem; /* 672px */



export const Container: React.FC<CProps>= (props) =>{
        return(
            <main className="container mx-auto px-6 sm:px-0 pb-6 max-w-prose">{props.children}</main>
        );
};

