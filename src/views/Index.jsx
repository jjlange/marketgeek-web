/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Index page
 **/

// React imports
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Modal from "./Components/Modal";

// Import icons from Heroicons
import { ArrowRightIcon, CashIcon, IdentificationIcon, UserCircleIcon } from '@heroicons/react/outline'

// Import Axios for HTTP requests
import axios from "axios";
import { getUser, setUser, setToken } from "../Utils/User";

// Import UI Components
import Grid from "./Components/Grid"; // TODO: Add Grid component
import LoginModalView from "./Modals/LoginModalView";
import SignUpModalView from "./Modals/SignUpModalView";
import SelectBox from "./Components/SelectBox";
import { useEffect } from "react";


// Index page 
function Index() {
    
  // Set the initial states of the page
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [firstNameValue, setFirstNameValue] = useState('');
  const [surNameValue, setSurNameValue] = useState('');

  const [signInMessage, setSignInMessage] = useState('Enter your email address and password.');
  const [signUpMessage, setSignUpMessage] = useState('We need a few details from you to create your account.');

  // Sign Up 
  const [signUpStep, setSignUpStep] = useState(1);

  const devMode = useState(process.env.REACT_APP_DEV_MODE ? true : false);

  const [loginModal, setLoginModalVisibility] = useState(false);
  const [signUpModal, setSignUpModalVisibility] = useState(false);

  const navigate = useNavigate();
  const userSession = getUser(); 

  // Check if session exists

  useEffect(() => {
    if(userSession) {
      console.log("You are logged in!")
      // Navigate to home
      navigate("/home")
    }     
  }, []);

  // Functions to open and close the modal
  const openModal = () => {
    setLoginModalVisibility(true)
  }

  const closeModal = () => {
    setLoginModalVisibility(false)
    setSignInMessage('Please enter your email address and password.');
    setEmailValue('');
    setPasswordValue('');
  }

  // Sign Up functions
  const openSignUpModal = () => {
    setSignUpModalVisibility(true)
  } 

  const closeSignUpModal = () => {
    setSignUpModalVisibility(false)
    setSignUpMessage('We need a few details from you to create your account.');
    setSignUpStep(1);
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

  // Function to handle first name change (text field)
  // This sets the first name variable to the value of the first name field
  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  }

  // Function to handle sur name change (text field)
  // This sets the sur name variable to the value of the sur name field
  const handleSurNameChange = (event) => {
    setSurNameValue(event.target.value);
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

  const handleSignUp = (event) => {
    // Prevent the default action of the form
    event.preventDefault();

    // Check if the email is empty
    if (emailValue === '') {
      // Set the email error message
      setSignUpMessage('Please enter an email address.');
    } else if(passwordValue === '') {
      // Set the password error message
      setSignUpMessage('Please enter a password.');
    } else {
      axios.post(process.env.REACT_APP_SERVER_URL +
        '/user/create', {
          email: emailValue,
          password: passwordValue,
          name: firstNameValue + ' ' + surNameValue,
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
              if(response.data.message === 'EMAIL_IN_USE') {
                  setSignUpMessage('That email is already taken.  Please try another.')
              } else if(response.data.message === 'SUCCESS') {
                  // Close Modal
                  closeSignUpModal();

                  // Open Sign In Modal
                  openModal();
              } else {
                  setSignUpMessage('Something went wrong. Try it again later!')
              }
          }
        })
      }
  }

  return (
      <div className={"bg-white dark:bg-slate-900 min-h-screen px-4 font-ubuntu overflow-visible relative"}>
        {/* 
          This is the header of the page
          It contains the logo and the sign in button, as well as some coloured canvas
          that you can see on the whole page.
        */}

        {/* Top canvas bubble (hidden in dark mode) */}
        <div className="w-full absolute top-32">

        <div className="w-[45em] h-[45em] mx-auto bg-sky-200 dark:bg-emerald-800 rounded-full filter blur-2xl animation animate-pulse-slow"></div>
        </div>
        
        {/* Bottom canvas bubbles (hidden in light mode) */}
        <div className="absolute md:hidden -top-0 ml-[-2em] w-72 h-72 bg-pink-500 dark:bg-pink-700 rounded-full filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-0 ml-[1em] w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full  filter blur-xl opacity-75"></div>
        <div className="absolute -bottom-0 ml-[4em] w-72 h-72 bg-pink-300 dark:bg-pink-400 rounded-full filter blur-3xl opacity-70"></div>

        {/* Logo and Buttons */}
        <div className="pt-16 flex flex-col justify-center  overflow-hidden">
          <div className="relative text-gray-800 w-full md:max-w-6xl sm:max-w-8xl mx-auto">
            <div>
              <div className="flex items-center">
                <div className="w-full flex">
                  <h2 className="inline-flex text-2xl md:text-3xl font-bold items-center text-gray-800 dark:text-gray-200 mr-4">
                    <CashIcon className="w-8 h-8 md:w-10 md:h-10 mr-2.5" />
                    MarketGeek 
                    { devMode === true && 
                      <span className="text-sm font-thin mx-3 pt-1">DEV BUILD</span>
                    }
                  </h2>
                </div>

                <div className="w-full justify-end flex items-center">
                  <span className="hidden md:block dark:text-gray-200 mr-4 ml-4">Already have an account?</span>
                  <button onClick={openModal} type="button" className="mx-2 inline-flex items-center px-4 md:px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                    Sign In
                    <ArrowRightIcon className="w-4 h-4 ml-2 mt-0.5" />
                  </button>
                </div>
              </div>
            </div>

          {/* Login Modal */}
          <Modal show={loginModal} 
                title="Hi there, welcome back!"
                description={signInMessage}
                primaryButton="Continue"
                secondaryButton="Close"
                icon="" // Optional
                contentView={
                  <LoginModalView 
                    emailValue={emailValue} 
                    passwordValue={passwordValue} 
                    onChangeEmail={handleEmailChange}
                    onChangePassword={handlePasswordChange}
                  />
                }
                onPrimary={handleSignIn}
                onSecondary={closeModal}
                onClose={closeModal}
                textAlign="center"
          ></Modal>

          {/* Sign Up Modal  */}
          {signUpStep === 1 &&
          <Modal show={signUpModal} 
                  title="Welcome to MarketGeek"
                  description="Here you can get your daily dose of stock analysis, all you need to do is to create an account. It's free and doesn't take long."
                  primaryButton="Continue"
                  secondaryButton="Close"
                  textAlign="center"
                  icon={<UserCircleIcon className="w-16 h-16" />}
                  onSecondary={closeSignUpModal}
                  onPrimary={() => setSignUpStep(2)}
                  onClose={closeSignUpModal}
          ></Modal>
          }

          {/* Sign Up Modal  */}
          {signUpStep === 2 &&
          <Modal show={signUpModal} 
                  title="Your Details"
                  description={signUpMessage}
                  primaryButton="Create"
                  secondaryButton="Go Back"
                  textAlign="center"
                  icon={<IdentificationIcon className="w-16 h-16" />}
                  contentView={
                    <SignUpModalView 
                      emailValue={emailValue} 
                      onChangeEmail={handleEmailChange}
                      passwordValue={passwordValue}
                      onChangePassword={handlePasswordChange}
                      firstNameValue={firstNameValue}
                      onChangeFirstName={handleFirstNameChange}
                      surNameValue={surNameValue}
                      onChangeSurName={handleSurNameChange}
                    />
                  }
                  onPrimary={handleSignUp}
                  onSecondary={() => setSignUpStep(1)}
                  onClose={closeSignUpModal}
          ></Modal>
          }

          {/* Main Content */}
          <div className="mx-auto mt-16">
            <div className="max-w-3xl">
              <h2 className="font-medium md:font-light text-3xl md:text-5xl mt-8 text-gray-900 break-normal leading-[1.5em] dark:text-gray-200 max-w-xl md:max-w-full">
                Join the platform that intelligently  
                predicts the market of tomorrow.
              </h2>

              <div className="flex flex-col md:flex-row mt-8 max-w-2xl">
                <div className="flex-shrink-0">
                  <button onClick={openSignUpModal} type="button" className="text-center items-center px-4 py-2 md:px-8 md:py-4 border border-transparent text-xl md:text-2xl rounded-lg text-sky-800 dark:text-gray-50 bg-sky-100/80 dark:bg-sky-600 dark:hover:bg-sky-600/90 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in md:font-semibold">
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
                <div className="border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-1 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-16 md:shadow-2xl">
                  <h2 className="text-lg font-bold text-sky-700 dark:text-sky-400 uppercase">Designed for Everyone</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/><br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                </div>
                <div className="border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-1 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-4 md:mt-16 md:shadow-2xl">
                  <h2 className="text-lg font-bold text-red-600 dark:text-red-400 uppercase">We &nbsp;❤️&nbsp; Trading</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/><br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                </div>
                <div className="border border-gray-100 dark:border-gray-800 col-span-2 p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-4 md:shadow-2xl">
                  <h2 className="text-lg font-bold text-yellow-600 dark:text-yellow-400 uppercase">Up for a challenge?</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                  <button type="button" className="mt-6 inline-flex items-center px-5 py-3 border text-base border-transparent font-medium rounded-full text-black bg-yellow-500/80 dark:bg-yellow-200 hover:bg-yellow-500/70 dark:hover:bg-yellow-600/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-yellow-500 transition ease-in">
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