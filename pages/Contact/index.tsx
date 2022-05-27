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
       
       
       <h1 className="text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-sky-400">Contact Form</h1>
      
      
      </header>
      <ContactForm/>
      
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-wavy decoration-sky-400">Social Media Links!</h1>
      

         {/* <div className="mt-4 grid grid-cols-3 divide-x">
              <div>God bless</div>
              <div>YES</div>
              <div>GODOSAfs</div>
          

    </div>*/}
          
          <div className="text-gray-400 mt-4 md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 ">
        
        { /*<Link href="https://github.com/gsheyn05">
              <button className="border-2 border-rose-600">
        <svg className="hover:-translate-y-1  border-2 border-rose-600 " xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GO TO GITHUB
        </button>
  </Link> */}


        <Link href="https://github.com/gsheyn05">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="64" height="64"
              viewBox="0 0 64 64"
              className=" fill:#000000; hover:-translate-y-1"><linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path></svg>

        </Link>

        <Link href="https://www.linkedin.com/in/gregory-sheyn-833a4719a/">
        <img className="hover:-translate-y-1"alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iNTEuMDYyNSIgeTE9IjY2LjgwNTg4IiB4Mj0iNTEuMDYyNSIgeTI9IjEzMS43OTc2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xXzQ0MDE5X2dyMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjOGFiNGZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZTQ5MmZmIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjUyLjA4OTEzIiB5MT0iNDEuNDQ5MzEiIHgyPSI1Mi4wODkxMyIgeTI9IjYyLjcyODk0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTJfNDQwMTlfZ3IyIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YWI0ZmYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNDkyZmYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwLjQ3NDg4IiB5MT0iMzcuOTYwOTQiIHgyPSIxMDAuNDc0ODgiIHkyPSIxMzMuMDk4NDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItM180NDAxOV9ncjMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhhYjRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2U0OTJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI4NiIgeTE9IjE3LjQ2ODc1IiB4Mj0iODYiIHkyPSIxNTQuNTMxMjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNF80NDAxOV9ncjQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFhNmRmZiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2M4MjJmZiI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0iIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PHBhdGggZD0iIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48cGF0aCBkPSIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik01OS4xMjUsMTI5di01OS4xMjVoLTE2LjEyNXY1OS4xMjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTFfNDQwMTlfZ3IxKSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZD0iTTUyLjAyNDYzLDYxLjgxMjVjNi43NTEsMCAxMC45NTQyNSwtMy45NjEzOCAxMC45NTQyNSwtOS41NTEzN2MtMC4xMjYzMSwtNS43MTM2MyAtNC4yMDMyNSwtOS44MDY2OSAtMTAuODI1MjUsLTkuODA2NjljLTYuNjI0NjksMCAtMTAuOTU0MjUsMy45NjQwNiAtMTAuOTU0MjUsOS42Nzc2OWMwLDUuNTkgNC4yMDA1Niw5LjY4MDM3IDEwLjY5ODk0LDkuNjgwMzdoMC4xMjYzMXoiIGZpbGw9InVybCgjY29sb3ItMl80NDAxOV9ncjIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48cGF0aCBkPSJNNzIuNDE3MzgsMTI5aDE4Ljk1NzYydi0zMi40ODkxOWMwLC0xLjc0MTUgMC4zMjc4OCwtMy40ODAzMSAwLjg0MTE5LC00LjcyNDYzYzEuMzk3NSwtMy40ODAzMSA1LjA0NDQ0LC03LjA4MTU2IDEwLjM5MjU2LC03LjA4MTU2YzcuMDA2MzEsMCAxMC4yNjg5NCw1LjM0Mjc1IDEwLjI2ODk0LDEzLjE3MTQ0djMxLjEyMzk0aDE2LjEyNXYtMzMuMzU3MjVjMCwtMTcuODkwNjkgLTguMjkwOTQsLTI1LjUyNTg3IC0yMS4wMzIzOCwtMjUuNTI1ODdjLTEwLjQ0MzYzLDAgLTEzLjc3MDc1LDUuMTMzMTMgLTE2LjMxODUsMTAuNTA4MTNoLTAuMjc2ODF2LTEwLjc1aC0xOC45NTc2M2MwLjI1NTMxLDUuMzc1IC0wLjQ3MDMxLDU5LjEyNSAtMC40NzAzMSw1OS4xMjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTNfNDQwMTlfZ3IzKSIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+PHBhdGggZD0iTTEzNC4zNzUsMTUzLjE4NzVoLTk2Ljc1Yy0xMC4zNzEwNiwwIC0xOC44MTI1LC04LjQ0MTQ0IC0xOC44MTI1LC0xOC44MTI1di05Ni43NWMwLC0xMC4zNzEwNiA4LjQ0MTQ0LC0xOC44MTI1IDE4LjgxMjUsLTE4LjgxMjVoOTYuNzVjMTAuMzcxMDYsMCAxOC44MTI1LDguNDQxNDQgMTguODEyNSwxOC44MTI1djk2Ljc1YzAsMTAuMzcxMDYgLTguNDQxNDQsMTguODEyNSAtMTguODEyNSwxOC44MTI1ek0zNy42MjUsMjQuMTg3NWMtNy40MDk0NCwwIC0xMy40Mzc1LDYuMDI4MDYgLTEzLjQzNzUsMTMuNDM3NXY5Ni43NWMwLDcuNDA5NDQgNi4wMjgwNiwxMy40Mzc1IDEzLjQzNzUsMTMuNDM3NWg5Ni43NWM3LjQwOTQ0LDAgMTMuNDM3NSwtNi4wMjgwNiAxMy40Mzc1LC0xMy40Mzc1di05Ni43NWMwLC03LjQwOTQ0IC02LjAyODA2LC0xMy40Mzc1IC0xMy40Mzc1LC0xMy40Mzc1eiIgZmlsbD0idXJsKCNjb2xvci00XzQ0MDE5X2dyNCkiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjwvZz48cGF0aCBkPSIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/>
        </Link>
                
                
                
              </div>
          </div>
                
      
      
      
      
      </Container>
          </Layout>
    );
  }

  export default Contact;
  
