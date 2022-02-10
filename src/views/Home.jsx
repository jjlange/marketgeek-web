/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Home page
 */

// Imports
import React from "react";
import { useNavigate } from "react-router-dom";


// Import icons from Heroicons
import { CashIcon, LogoutIcon } from '@heroicons/react/outline'

// Import utilities
import { getToken, getUser, removeToken } from "../Utils/User";

// Import components
import Button from "./Components/Button";

// Home page 
function Home() {
  const user = getUser();
  const navigate = useNavigate();
  
  // Method to sign out the user
  const signOut = () => {
        // Remove the user session
        removeToken(null);
        // Redirect to the login page
        navigate('/');
  }

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen font-ubuntu overflow-visible">
        {/* Logo and Buttons */}
        <div className="">
          <div className="relative text-gray-100 w-full mx-auto">
            <div className="bg-gradient-to-r dark:bg-gradient-to-b from-sky-600 via-cyan-600 to-cyan-300 dark:from-gray-800 dark:to-gray-900 mx-auto overflow-hidden pb-3">
              <div className="pt-6 md:max-w-5xl mx-auto">
                <div className="flex">
                <h2 className="w-full flex text-3xl font-bold items-center text-gray-100 dark:text-gray-200">
                  <CashIcon className="w-10 h-10 mr-2.5" />
                  MarketGeek 
                </h2>

                <div className="flex-shrink-0 justify-end">
                  <Button lightMode="blue" darkMode="yellow" textColor="white" onClick={signOut}>
                    Sign Out
                    <LogoutIcon className="w-5 h-5 mx-1 ml-2" />
                  </Button>
                </div>
                </div>
              </div>
            </div>

          {/* Main Content */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-16 shadow-2xl">
              <h2 className="font-light text-5xl text-sky-700 leading-[1.5em] dark:text-gray-200">
                Hi there, {(user.name).split(' ', 1)}!
              </h2>
              <div className="text-gray-800 dark:text-gray-200 mt-8">
                <p className="font-bold text-xl text-gray-800 dark:text-white">USER INFORMATION:</p>
                <p className="font-light text-lg mt-2">ID: {user._id}</p>
                <p className="font-light text-lg mt-1">Full Name: {user.name}</p>
                <p className="font-light text-lg mt-1">Email: {user.email}</p>
              </div>

              <div className="text-gray-800 dark:text-gray-200 mt-8">
                <p className="font-bold text-xl text-gray-800 dark:text-white">SESSION INFORMATION:</p>
                <p className="font-light text-lg break-all mt-2">JWT Token: {getToken()}</p>
                <p className="font-light text-lg break-all mt-2">User Array: {sessionStorage.getItem('user')}</p>
              </div>
            </div>

            <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-16 shadow-2xl">
                  <h2 className="text-lg font-bold text-sky-700 dark:text-sky-400 uppercase">Designed for Everyone</h2>
                  <h3 className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                  Sit amet, consectetur adipiscing elit. Curabitur ullamcorper tincidunt purus ac vulputate.<br/><br/> Quisque id dui ac lorem eleifend rhoncus. Fusce non ipsum pharetra, ornare orci in, mattis sem.
                  </h3>
                </div>
                <div className="p-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-16 shadow-2xl">
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
                </div>
            </div>

            {/* Footer */}
            <div className="mt-32 p-2 pl-4">
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
  )
}

export default Home;