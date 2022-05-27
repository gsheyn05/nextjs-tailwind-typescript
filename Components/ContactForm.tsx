import React from "react";
import { useState } from "react";
import { Container } from "./container";

export const ContactForm : React.FC = () =>{
    
return(
    
        <Container>
            <br/>
  <div className="p-6 border border-gray-300 sm:rounded-md">
    <form method="POST" action="https://public.herotofu.com/v1/323b3b50-de08-11ec-a769-932fb222f6cf">
      <label className="block mb-6">
        <span className="text-blue-600">Your name</span>
        <input
          type="text"
          name="name"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="Joe Bloggs"
        />
      </label>
      <label className="block mb-6">
        <span className="text-blue-600">Email address</span>
        <input
          name="email"
          type="email"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          placeholder="joe.bloggs@example.com"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-blue-600">Message</span>
        <textarea
          name="message"
          className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          
          placeholder="Tell us what you're thinking about..."
        ></textarea>
      </label>
      <div className="mb-6">
        <button
          type="submit"
          className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
        >
          Contact Gregory Sheyn
        </button>
      </div>
      <div>
        <div className="mt-2 text-gray-700 text-right text-xs">
          by Gregory Sheyn and
          <a href="https://herotofu.com" className="hover:underline" target="_blank"
            >HeroTofu</a
          >
        </div>
      </div>
    </form>
  </div>
  </Container>


);
    

}
{/*https://herotofu.com/solutions/forms-library/tailwind/simple-contact-form to finish configuration */}

