import React from "react";
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar } from "../../Components/Navbar"
import {Layout} from "../../Components/Layout"
import { Container } from '../../Components/container'
import { ContactForm } from "../../Components/ContactForm";
import Link from "next/link";


 const Contact: NextPage = () => {
    return (
    <Layout>
      <Navbar />
      
      <Container>
      <header >
       
       
       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-sky-400">Contact ME!</h1>
      
      
      </header>
      <ContactForm/>
      
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-wavy decoration-sky-400">Social Media Links!</h1>
      

          <div className="mt-4 grid grid-cols-3 divide-x">
              <div>God bless</div>
              <div>YES</div>
              <div>GODOSAfs</div>
          

          </div>
          
          <div className="text-gray-400 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 ">
              <Link href="https://github.com/gsheyn05">
              <svg
                 className="w-6 h-6 text-blue-600 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
        <path
            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
            />
        </svg>
                 </Link>
              </div>
          </div>
                
      
      
      
      
      </Container>
          </Layout>
    );
  }

  export default Contact;
  
