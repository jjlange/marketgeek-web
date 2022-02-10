/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Index page
 */

// React imports
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "./Components/Modal";

// Import icons from Heroicons
import { ArrowRightIcon, CashIcon } from '@heroicons/react/outline'

// Import Axios for HTTP requests
import axios from "axios";
import { setUser, setToken } from "../Utils/User";

// Import UI Components
import Grid from "./Components/Grid"; // TODO: Add Grid component

// Index page 
function Index() {
    
  // Set the initial states of the page
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [signInMessage, setSignInMessage] = useState('Enter your email address and password.');

  const devMode = useState(true);

  const [loginModal, setLoginModalVisibility] = useState(false);

  const navigate = useNavigate();

  // Functions to open and close the modal
  const openModal = () => setLoginModalVisibility(true)
  const closeModal = () => {
    setLoginModalVisibility(false)
    setSignInMessage('Enter your email address and password.');
    setEmailValue('');
    setPasswordValue('');
  }

  // Function to handle email change (text field)
  // This sets the email variable to the value of the email field
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  }

  // Function to handle password change (password field)
  // This sets the password variable to the value of the password field
  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  }

  const handleSignIn = (event) => {
    // Prevent the default action of the form
    event.preventDefault();

    // Check if the email is empty
    if (emailValue === '') {
      // Set the email error message
      setSignInMessage('We need your email address that is associated with your account.');
    } else {
      // Check if the password is empty
      if (passwordValue === '') {
        // Set the password error message
        setSignInMessage('We need your password that you used to register your account.')
      } else {
        // Handle Sign In using Axios to the API and .env server url
        axios.post(process.env.REACT_APP_SERVER_URL + 
          '/user/auth', {   
          email: emailValue,
          password: passwordValue,
          api_key: process.env.REACT_APP_SERVER_API_KEY
        })
          .then(response => {
            // Check if message is authenticated
            if(response.data.accessToken) {
                // Set session for the access token and user data
                setToken(response.data.accessToken)
                setUser(response.data.user)

                // Redirect to the home page
                navigate("/home");
            } else {
                if(response.data.message === 'password_incorrect') {
                    setSignInMessage('Whoops, that\'s wrong.  Please check your details.')
                } else {
                    setSignInMessage('Something went wrong. Try it again later!')
                }
            }
          }
          // handle 404
          ).catch(error => {
            console.log(error)
            setSignInMessage('There was an error signing you in. Please try again later.')
          }
        )
      }
    }
  }



  return (
      <div className="bg-white dark:bg-gray-900 min-h-screen px-4 font-ubuntu overflow-visible bg">
        {/* 
          This is the header of the page
          It contains the logo and the sign in button, as well as some coloured canvas
          that you can see on the whole page.
          */}

        {/* Top canvas bubbles (hidden in dark mode) */}
        <div className="absolute top-0 -left-12 w-72 h-72 bg-sky-200 dark:hidden rounded-full filter blur-xl"></div>
        <div className="absolute -top-12 -right-24 w-[20em] h-[20em] bg-blue-200 dark:hidden rounded-full mix-blend-multiply filter blur-xl opacity-90"></div>

        {/* Bottom canvas bubbles (hidden in light mode) */}
        <div className="hidden dark:block absolute -bottom-0 left-[4em] w-72 h-72 bg-pink-500 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div className="hidden dark:block absolute -bottom-0 left-[8em] w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full  filter blur-xl opacity-75"></div>
        <div className="hidden dark:block absolute -bottom-0 left-[2em] w-72 h-72 bg-pink-300 dark:bg-pink-400 rounded-full filter blur-3xl opacity-70"></div>

        {/* Logo and Buttons */}
        <div className="pt-16 flex flex-col justify-center  overflow-hidden">
          <div className="relative text-gray-800 w-full md:max-w-6xl mx-auto">
            <div>
              <div className="flex">
                <h2 className="w-full flex text-3xl font-bold items-center text-gray-800 dark:text-gray-200">
                  <CashIcon className="w-10 h-10 mr-2.5" />
                  MarketGeek 
                  { devMode && <span className="text-sm font-thin mx-3 pt-1">DEV BUILD</span>}
                </h2>

                <div className="flex-shrink-0 justify-end">
                  <span className="dark:text-gray-200 mr-4">Already have an account?</span>
                  <button onClick={openModal} type="button" className="mx-2 inline-flex items-center px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                    Sign In
                    <ArrowRightIcon className="w-4 h-4 ml-2 mt-0.5" />
                  </button>
                </div>
              </div>
            </div>

          {/* Login Modal */}
          <Modal show={loginModal} 
                onClose={closeModal}
                title="Welcome back!"
                description=
                {signInMessage}
                primaryButton="Continue"
                icon="" // Optional
                emailValue={emailValue}
                passwordValue={passwordValue}
                onChangeEmail={handleEmailChange}
                onChangePassword={handlePasswordChange}
                onSubmit={handleSignIn}
          ></Modal>

          {/* Main Content */}
          <div className="mx-auto mt-16">
            <div className="max-w-3xl">
              <h2 className="font-light text-5xl mt-8 text-gray-900 leading-[1.5em] dark:text-gray-200">
                Join the platform that intelligently  
                predicts the market of tomorrow.
              </h2>

              <div className="flex flex-col md:flex-row mt-8 max-w-2xl">
                <div className="flex-shrink-0">
                  <button type="button" className="text-center items-center px-8 py-4 border border-transparent text-2xl rounded-lg text-sky-800 dark:text-gray-50 bg-sky-100/80 dark:bg-sky-600 dark:hover:bg-sky-600/90 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in font-semibold">
                    Create Your Account
                  </button>
                </div>
              </div>
            </div>

            {
            /*    
            TODO: Grid UI Component
            
            <Grid columns="2" gap="4">
              ...
            </Grid>
            */}

            <div className="grid md:gap-4 w-full">
                <div className="col-span-2 md:col-span-1 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-16 shadow-2xl">
                  <h2 className="text-lg font-bold text-sky-700 dark:text-sky-400 uppercase">Designed for Everyone</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/><br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                </div>
                <div className="col-span-2 md:col-span-1 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-4 md:mt-16 shadow-2xl">
                  <h2 className="text-lg font-bold text-red-600 dark:text-red-400 uppercase">We &nbsp;❤️&nbsp; Trading</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/><br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                </div>
                <div className="col-span-2 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-4 shadow-2xl">
                  <h2 className="text-lg font-bold text-yellow-600 dark:text-yellow-400 uppercase">Up for a challenge?</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                  <button type="button" className="mt-6 inline-flex items-center px-5 py-3 border text-base border-transparent font-medium rounded-full text-gray-900 bg-yellow-600/80 dark:bg-yellow-200 hover:bg-yellow-500/70 dark:hover:bg-yellow-600/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-500 transition ease-in">
                    Learn More
                  </button>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-16 mb-6">
              <h2 className="font-light text-sm
                text-gray-900 leading-[1.75em] dark:text-gray-200">
                  Copyright © 2022 - <a href="/" className="text-gray-900 dark:text-gray-300">MarketGeek</a>. 
                  All rights reserved.
                <br />
                <span className="font-bold">⚙️ Web v{process.env.REACT_APP_VERSION}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;