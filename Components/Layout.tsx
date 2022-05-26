import React from 'react';

type Props = { children: React.ReactNode };
export const Layout: React.FC<Props>=({children}) =>{

    return(
        
        <div className="w-full h-full flex flex-col ">
        <main className="flex-auto">{children}</main>
        </div>
        
    );

};