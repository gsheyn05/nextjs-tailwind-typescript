import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Navbar} from "../Components/Navbar";
import { Layout } from '../Components/Layout';
import { Container } from '../Components/container';

const Home: NextPage = () => {
  return (
    <Layout>
    <Navbar/>
    
    <Container>
    <header>
      <h1 className="flex text-3xl font-bold">
        Gregory Sheyn <span className="animate-[wave_5s_ease-in-out_2] hover:animate-[wave_3s]">👋🏻</span>
        
        </h1>
    </header>

    </Container>

    </Layout>
  )
}

export default Home
