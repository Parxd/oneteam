import React from "react";
import { auth } from "../../firebase";

// Imports for Google sign-in functionality
import { GoogleButton } from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Imports for email & password login functionality
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const RegisterForm = () => {
  // Google registration functionality

  // Email & Password register functionality
  
  // Page structure
  return (
    <section class="text-gray-400 bg-gray-900 body-font relative">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
              <div class="relative">
                  <label 
                    for="Email"
                    class="leading-7 text-sm text-gray-400">Email</label>
                  <input 
                    type="text" 
                    id="Email" 
                    name="Email"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                  <label 
                    for="Password"
                    class="leading-7 text-sm text-gray-400">Password</label>
                  <input 
                    type="Password" 
                    id="Password" 
                    name="Password"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
            </div>
            
            <div class="p-2 w-1/2">
              <div class="relative">
                  <label 
                    for="Password" 
                    class="leading-7 text-sm text-gray-400">Password</label>
                  <input 
                    type="Password" 
                    id="Confirm Password" 
                    name="Confirm Password"
                    class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
            </div>
            <div class="p-2 w-full">
            <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Register</button>
            </div>
        </div>
        </div>

        <p className='text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
            or
          </p>

        <div class="p-2 w-full">
          <GoogleButton class="flex mx-auto focus:outline-none hover:bg-blue-600 rounded text-lg"/>
        </div>

        <div class="p-2 w-full">
          <p className="text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Existing user? <a class="text-gray-400 border-0 focus:outline-none hover:text-blue-600" href="../login">Log In</a></p>
        </div>

    </div>
    </section>
  );
};

export default RegisterForm;