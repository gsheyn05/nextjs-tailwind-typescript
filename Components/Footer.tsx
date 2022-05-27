import React from "react";

import { Container } from "./container";


export const Footer: React.FC=() =>{
    return(
        
            <Container>
            <div className="md:flex md:items-center md:justify-between">
            <footer className="pt-8 h-48 flex items-center  flex-shrink-0">

                <div className="mt-8 md:order-1 md:mt-0">

                <p className="text-center text-base leading-6 text-blue-600">Developed with love by Gregory Sheyn!</p>
                
                </div>
                </footer>
                </div>
            
            </Container>

        
    )
}

