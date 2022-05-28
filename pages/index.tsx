import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Navbar} from "../Components/Navbar";
import { Layout } from '../Components/Layout';
import { Container } from '../Components/container';
import { Footer } from '../Components/Footer';

import ProfilePic from '../public/assets/GregPortraitProfile.jpg'


const Home: NextPage = () => {
  return (
    <Layout>
    <Navbar/>
    
    <Container>
    <header>
      <h1 className="flex text-3xl font-bold">
        Gregory Sheyn <span className="animate-[wave_5s_ease-in-out_2] hover:animate-[wave_3s]">👋🏻</span>
        
        </h1>
        <h2 className="mt-1 text-lg font-semibold leading-tight tracking-tight">
              Full Stack Engineer 
            </h2>
            <p className="mt-4 text-base"> Newly Graduated Software Engineer passionate in all forms of development! </p>
    
    </header>
    <div className="flex justify-center items-center mt-6 overflow-hidden">
    
    <Image src={ProfilePic} width="200" height="200" className="rounded-full"></Image>
    </div>



    </Container>
    
    <Footer/>
    </Layout>
    
    

  )
}

export default Home
