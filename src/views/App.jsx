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

// Imports
import React from "react";
import Modal from "./components/Modal";

// Import icons from Heroicons
import { CashIcon, CurrencyPoundIcon } from '@heroicons/react/outline'

// Index page 
class App extends React.Component {

  // Constructor that sets the initial state of the page
  constructor(props) {
    super(props);

    // State of the page
    this.state = {
      // 
      devMode: false,
      registerClosed: true,

      // Modals
      loginModal: true,
      registerModal: false,

      // Email and password values for the text fields
      emailValue: '',
      passwordValue: '',
    };
  }

  // Functions to open and close the modals
  openModal = () => this.setState({ loginModal: true });
  closeModal = () => this.setState({ loginModal: false });

  // Function to handle email change (text field)
  // This sets the email variable to the value of the email field
  handleEmailChange = (event) => {
    this.setState({ emailValue: event.target.value });
  }

  // Function to handle password change (password field)
  // This sets the password variable to the value of the password field
  handlePasswordChange = (event) => {
    this.setState({ passwordValue: event.target.value });
  }

  // Render the page
  render() {
    return (
      <div className="bg-white dark:bg-gray-900 h-screen">
        {/* 
          This is the header of the page
          It contains the logo and the sign in button, as well as some coloured canvas
          that you can see on the whole page.
          */}

        {/* Top canvas bubbles (hidden in dark mode) */}
        <div class="absolute top-0 -left-12 w-72 h-72 bg-purple-200 dark:hidden rounded-full filter blur-xl"></div>
        <div class="absolute -top-12 -right-24 w-[20em] h-[20em] bg-blue-200 dark:hidden rounded-full mix-blend-multiply filter blur-xl opacity-90"></div>

        {/* Bottom canvas bubbles */}
        <div class="absolute -bottom-0 left-[4em] w-72 h-72 bg-pink-500 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        <div class="absolute -bottom-0 left-[8em] w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full  filter blur-xl opacity-75"></div>
        <div class="absolute -bottom-0 left-[2em] w-72 h-72 bg-red-300 dark:bg-red-400 rounded-full filter blur-3xl opacity-70"></div>

        {/* Logo and Buttons */}
        <div class="pt-20 flex flex-col justify-center  overflow-hidden">
          <div className="relative text-gray-800 w-full md:max-w-5xl mx-auto font-nunito">
            <div>
              <div className="flex">
                <h2 className="w-full flex text-3xl font-bold items-center text-gray-800 dark:text-gray-200">
                  <CashIcon className="w-10 h-10 mr-2.5" />
                  MarketGeek 
                  { this.state.devMode && <span className="text-sm font-thin font-nunito mx-3 pt-1">DEV BUILD</span>}
                </h2>

                <div class="flex-shrink-0 justify-end">
                  <button onClick={this.openModal} type="button" class="mx-2 inline-flex items-center px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-indigo-800/80 hover:bg-indigo-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in">
                    Sign In
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          {/* Login Modal */}
          <Modal show={this.state.loginModal} 
                onClose={this.closeModal}
                title="Sign In"
                description={"Please enter your email address and password. Input: " + this.state.emailValue + " Password: " + this.state.passwordValue}
                primaryButton="Continue"
                icon="" // Optional
                emailValue={this.state.emailValue}
                passwordValue={this.state.passwordValue}
                onChangeEmail={this.handleEmailChange}
                onChangePassword={this.handlePasswordChange}
          ></Modal>

          {/* Main Content */}
          <div className="mx-auto mt-12">
            <div className="max-w-2xl">
              <h2 className="font-light text-4xl mt-8 text-gray-900 leading-[1.5em] dark:text-gray-200">
                Join the platform that intelligently 
                <br className="hidden md:block"/>
                predicts the market of tomorrow.
              </h2>

              <div className="flex flex-col md:flex-row mt-8 max-w-2xl">
                <div className="flex-shrink-0">
                  <button type="button" className="text-center items-center px-6 py-3 border border-transparent text-xl rounded-lg text-indigo-800 dark:text-gray-50 bg-indigo-100/80 dark:bg-indigo-600 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in font-semibold">
                    Create Your Account
                  </button>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-32">
              <h2 className="font-light text-sm
                text-gray-900 leading-[1.75em] dark:text-gray-200">
                  Copyright © 2022 - <a href="/" className="text-gray-900 dark:text-gray-300">MarketGeek</a>. 
                  All rights reserved.
                <br />
                <span className="font-bold">⚙️ Development Build, v1.0.0.</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
