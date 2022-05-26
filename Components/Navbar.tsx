import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
    MoonIcon,
    SunIcon} from '@heroicons/react/outline';
 

export const Navbar : React.FC = () =>{
    const { resolvedTheme, setTheme } = useTheme();
    const router = useRouter();

    return(
<nav className="flex flex-row items-center justify-center top-background sticky w-full h-20 z-50 top-0 mb-8 backdrop-blur-2xl">
      
      <div className="container mx-auto px-5 max-w-5xl flex flex-row justify-start">
        <div className="flex flex-row space-x-7">
   
        <Link href="/">
        <a className={`transition mr-4 font-bold  my-auto hover:text-blue-600 hover:-translate-y-1 ${router.pathname == "/" ? "text-red-600 underline" : "text-blue-600"}`}>
            Home
            </a>
          </Link>
          
          <Link href="/About">
          <a className={`transition mr-4 font-bold my-auto hover:text-blue-600 hover:-translate-y-1   ${router.pathname == "/About" ? "text-red-600 underline" : "text-blue-600"}`}>
              About
              </a>
            </Link>

            <Link href="/Contact">
          <a className={`transition mr-4 font-bold my-auto hover:text-blue-600 hover:-translate-y-1   ${router.pathname == "/Contact" ? "text-red-600 underline" : "text-blue-600"}`}>
              Contact
              </a>
            </Link>

            

          { /* <Link href="/About"> THIS IS HOW WITH A BUTTON
                <button className={"transition ease-in-out delay-150 bg-blue-600 text-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"}>
                    God
                    </button>
                </Link>
    */}

          </div>
        
        <div className="container mx-auto px-5 max-w-5xl flex flex-row justify-end"> 
            <button  onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {resolvedTheme === 'dark' ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
            </button>
        </div>
          
          
          </div>

          </nav>
    );
};