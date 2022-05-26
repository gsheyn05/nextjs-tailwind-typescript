import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from "../../Components/Navbar"
import {Layout} from "../../Components/Layout"
import { Container } from '../../Components/container'


const About: NextPage = () => {
    return (
    <Layout>
      <Navbar />
      
      <Container>
      <header >
       
       
       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-sky-400">About</h1>
      
      
      </header>
      
      </Container>
          </Layout>
    )
  }
  
  export default About
  