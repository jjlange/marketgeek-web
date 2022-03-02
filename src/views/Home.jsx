/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Home page
 **/

// Imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Import icons from Heroicons
import { CashIcon, BellIcon, ViewGridIcon, NewspaperIcon, StarIcon, PlusIcon } from '@heroicons/react/outline'

// Import utilities
import { getUser, removeToken } from "../Utils/User";

// Import components
import Widget from "./Components/Widget";

// Import test json files
import tradingStocks from "../Tests/tradingStocks.json";

// Home page 
function Home() {

  // Retrieve user session
  const userSession = getUser();

  // User
  const user = {  
    name: userSession.name,
    email: userSession.email,
    firstName: userSession.name.split(" ")[0],
    lastName: userSession.name.split(" ")[1],
    role: 1,
  }

  // Use Navigation hook
  const navigate = useNavigate();
  
  // Method to sign out the user
  const signOut = () => {
        // Remove the user session
        removeToken(null);
        // Redirect to the login page
        navigate('/');
  }

  // Load most popular stocks
  const loadMostPopularStocks = () => {
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen font-ubuntu overflow-visible">
        {/* Logo and Buttons */}
        <div className="">
          <div className="relative text-gray-800 dark:text-gray-100 w-full mx-auto">
            <div className="mx-auto overflow-hidden pb-3">
              <div className="pt-6 max-w-lg md:max-w-2xl lg:max-w-6xl mx-auto">
                <div className="flex">
                <h2 className="w-full flex text-3xl font-bold items-center">
                  <CashIcon className="w-10 h-10 mr-2.5" />
                  MarketGeek 
                </h2>

                <div className="flex flex-shrink-0 justify-end">
                  { user.role === 1 && 
                    <div className="mr-6">
                      <button type="button" className="hidden md:inline-flex items-center px-4 md:px-4 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-gray-700/80 hover:bg-gray-700/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in">
                        Internal Area
                      </button>
                    </div>
                  }
                  <button type="button" className="hidden md:inline-flex items-center px-4 md:px-4 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-red-600/80 hover:bg-red-500/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in" onClick={signOut}>
                      Sign Out
                    </button>
                </div>
                </div>
              </div>
            </div>

          {/* Main Content */}
          <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6">
              <div className="relative border border-gray-100 dark:border-gray-800 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-12 md:shadow-xl lg:h-[38em]">
                <div className="w-full pt-8 pb-8 pl-2 pr-2">
                  <img src="https://pbs.twimg.com/profile_images/1462656761798746115/W7zQhFKq_400x400.jpg" className="w-32 h-32 mx-auto rounded-full border border-gray-600" alt="Profile" />
                  <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-200 text-center mt-4">{user.name}</h2>
                  <div className="flex flex-row md:flex-col xl:flex-row md:space-y-4 xl:space-y-0 text-gray-800 dark:text-gray-200 mt-4 mx-auto w-full">
                    <div className="flex-1 text-center">
                        <button type="button" className="inline-flex items-center px-3 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                          My Account
                        </button>
                    </div>
                    <div className="flex-1 text-center">
                        <button type="button" className="inline-flex items-center px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                          Settings
                        </button>
                    </div>
                  </div>
                </div>

               <div className="md:space-y-4 xl:space-y-0 text-gray-800 dark:text-gray-200 mx-auto w-full">
                    <div className="flex-1 text-center">
                        <button type="button" className="inline-flex items-center w-full pl-4 py-2 border text-xl border-transparent font-medium text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                          <span className="mr-3">
                            <ViewGridIcon className="w-6 h-6" />
                          </span>
                          Dashboard
                        </button>
                        <div className="mt-4">
                          <button type="button" className="inline-flex items-center w-full pl-4 py-2 border text-xl border-transparent font-medium text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                            <span className="mr-3">
                              <NewspaperIcon className="w-6 h-6" />
                            </span>
                            News
                          </button>
                        </div>
                        <div className="mt-4">
                          <button type="button" className="inline-flex items-center w-full pl-4 py-2 border text-xl border-transparent font-medium text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                            <span className="mr-3">
                              <StarIcon className="w-6 h-6" />
                            </span>
                            Favourite Stocks
                          </button>
                        </div>
                    </div>
                  </div> 
                  <div className="hidden lg:flex absolute bottom-0 w-full">
                          <button type="button" className="inline-flex rounded-b-md -mb-1 items-center w-full pl-4 py-2 border text-xl border-transparent font-medium text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                            <span className="mr-3">
                              <PlusIcon className="w-6 h-6" />
                            </span>
                            Add New Topic
                          </button>
                        </div>
              </div>

              <div className="col-span-3">
                <div className="border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-1 pt-8 pb-8 pl-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-12 md:shadow-2xl">
                  <h2 className="font-medium text-5xl text-sky-700 leading-[1.5em] dark:text-gray-200">
                    Dashboard
                  </h2>
                  <div className="text-gray-800 dark:text-gray-200 mt-4 text-lg">
                    <h3>
                      Welcome to your dashboard, {user.firstName}! <br />See what's happening with stocks around the world and be the first to know when prices change.
                    </h3>
                  </div>
                </div>

                <div className="md:grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-2">
                  <Widget title="Notifications"
                          textAlign="center"
                          columns="1"
                          view={<h3 className="text-xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                            No new notifications
                          </h3>}
                          icon={<BellIcon className="w-10 h-10 mx-auto text-sky-400" />}
                  ></Widget>

                  <Widget title="Your Trading"
                          columns="2"
                          view={
                            <div className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal  overflow-y-scroll h-32 pr-6">
                              { tradingStocks.map(stock => (
                                <div className="flex items-center mt-4">
                                  <div className="w-10 h-10 mr-2.5">
                                    {stock.id}.
                                    </div>
                                    <div className="w-full">
                                      <p className="text-xl mt-1">{stock.name}</p>
                                      <p className="block font-light text-lg mt-1 bg-sky-300 w-16 text-center rounded-md text-black">{stock.symbol}</p>
                                    </div>
                                    <div className="flex-shrink-0 float-right">
                                      <p className="font-light text-2xl mt-1">{stock.price} &nbsp;{stock.currency}</p>
                                    </div>
                                </div>
                              ))}
                            </div>
                          }
                  ></Widget>

                  <Widget title="Untitled Widget"
                          columns="1"
                          view={<h3 className="text-xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                            This is a new Widget component.
                          </h3>}
                  ></Widget>

                  <Widget title="The Market"
                          columns="1"
                          view={<h3 className="text-xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                            Error occurred while fetching data.
                          </h3>}
                  ></Widget>

                  <Widget title="Untitled Widget"
                          columns="1"
                          view={<h3 className="text-xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                            This is a new Widget component.
                          </h3>}
                  ></Widget>

                  <Widget title="Admin-Tools"
                          columns="3"
                          view = {
                            <div className="text-xl text-sky-100 pt-2">
                              <button onClick={signOut} className="text-red-500 dark:text-red-200">Sign Out User</button>
                            </div>
                          }
                  ></Widget>

                  <Widget title="This is a new Widget"
                          column="1"
                          view= {
                            <p>Hello, world!</p>
                          }
                  ></Widget>
                </div>
              </div>
            </div>

            <div className="w-full mt-12">
                <button type="button" className="mx-auto flex items-center px-8 py-3 border text-xl border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                    See more news..
                </button>
            </div>
            
            {/* Footer */}
            <div className="mt-12 p-2 pl-4">
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