import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from "../../Components/Navbar"
import {Layout} from "../../Components/Layout"
import { Container } from '../../Components/container'
import { TimeLine } from '../../Components/TimeLine'
import Link from 'next/link';
import { Carousel } from '../../Components/Carousel2'

import { Footer } from '../../Components/Footer'

import PR from "../../public/assets/PuertoRico.jpg"
import IT from "../../public/assets/RomeItaly.jpg"
import FR from "../../public/assets/ParisFrance.jpg"
import SW from "../../public/assets/Switzerland.jpg"





const About: NextPage = () => {
    const countries=[PR,IT,FR,SW]

    return (
    <Layout>
      <Navbar />
      
      <Container>
      <header >
       
       
       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-sky-400">About</h1>
      <p className="mt-3">Hello World! My name is Gregory Sheyn and  am currently based within the United States.
        I started my coding journey in 2019 upon entrance at McGill University 
        and graduated with a double major bachelor's degree in Computer Science and Economics from McGill in 2022!
      </p>
      
      </header>
      
      <section>
      <header className="flex flex-row justify-between items-center mt-12">
        <h2 className="text-3xl font-extrabold leading-tight">
          TimeLine
        </h2>
        </header>
        
        <p className="mt-3 font-bold"> Short decription of my experience for more detail refer to 
        <a  href="/assets/GSRESUMELINKWORKS.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"> MY RESUME </a></p>
        
        <TimeLine/>
      
      </section>
      
      <section>
      <header className="flex flex-row justify-between items-center mt-12">
        <h2 className="text-3xl font-extrabold leading-tight">
          Travel
        </h2>
        </header>
        <p className="mt-3 font-bold"> Some of my favorite travel destinations!</p>
        
        <Carousel items={countries}/>
        
      
      </section>
      
   


      
      </Container>
      <Footer/>
          </Layout>
    )
  }
  
  export default About
  