import React from "react";
import { useTheme } from 'next-themes';

export const TimeLine :React.FC= ()=>{
    const { resolvedTheme, setTheme } = useTheme();
    return(
        
        <ol className="relative border-l border-gray-600 " >                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-black "></div>
        <time className="mb-1 text-sm font-normal leading-none ">September 2019</time>
        <h3 className="text-lg font-semibold ">Entrance to McGill University</h3>
        <p className="mb-4 text-base font-normal ">Started my Computer Science and Economics degree at McGill!</p>
        </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-black "></div>
        <time className="mb-1 text-sm font-normal leading-none ">May 2020-August 2020</time>
        <h3 className="text-lg font-semibold "> Programmer for META Layer Development Research Group at McGill University</h3>
        <p className="text-base font-normal ">Part of a Research Team under the guidance of McGill Assistant Professor Joseph Vybihal 
        tasked with improving and documenting a META Layer codebase for a general-purpose robot AI that can problem-solve in a simulated 
environment. </p>
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-black "></div>
        <time className="mb-1 text-sm font-normal leading- ">June 2021-August 2021</time>
        <h3 className="text-lg font-semibold "> Software Operations Intern at Movilitas Consulting</h3>
        <p className="text-base font-normal "> Aided 2-member Global Operations Team in day-to-day technical operations 
        and developed essential scripts and code in a variety of programming languages such as Python to automize daily tasks
        </p>
    </li>
    <li className="ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-black "></div>
        <time className="mb-1 text-sm font-normal leading- ">May 2022</time>
        <h3 className="text-lg font-semibold "> Graduated from McGill University with a Bachelors degree in Computer Science and Economics</h3>
        <p className="text-base font-normal "> Completed a Three year Bachelors degree at McGill University with a double major concentration in Computer Science and Economics.
        </p>

    </li>
</ol>
    )
}

