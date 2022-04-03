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
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Import icons from Heroicons
import { CashIcon, BellIcon, ViewGridIcon, NewspaperIcon, StarIcon, PlusIcon, CheckCircleIcon } from '@heroicons/react/outline'

// Import utilities
import { getUser, removeToken, removeUser, setUser } from "../Utils/User";

import { fetchPopularStocks, fetchSentiments} from "../Hooks/financialFetch";
// Import components
import Widget from "./Components/Widget";

// Import test json files
import tradingStocks from "../Tests/tradingStocks.json";
import searchResults from "../Tests/searchResults.json"
import SearchBox from "./Components/SearchBox";

// Home page 
function Home() {

  // Retrieve user session
  const userSession = getUser();

  const [popularStocks, setPopularStocks] = useState([]);
  const [stocks, setStocks] = useState([])
  const [positiveSentiment, setPositiveSentiment] = useState(0);
  const [negativeSentiment, setNegativeSentiment] = useState(0);
  const [neutralSentiment, setNeutralSentiment] = useState(0);

  const [test, setTest] = useState(0)


  
  // fetch popular stocks
  useEffect(() => { 
    fetchPopularStocks(4).then((result) => {
      setPopularStocks(result)
    })
  }, []);

  // get positive sentiment count
  useEffect(() => {
    fetchSentiments().then((result) => {
      setPositiveSentiment(result[0].positive)
      setNeutralSentiment(result[0].neutral)
      setNegativeSentiment(result[0].negative)
      //setTest(sentimentResult)
      
    })
  }, []);

  // User
  const user = {  
    name: userSession.name,
    email: userSession.email,
    firstName: userSession.name.split(" ")[0],
    lastName: userSession.name.split(" ")[1],
    role: 1
  }

  // Use Navigation hook
  const navigate = useNavigate();
  
  // Method to sign out the user
  const signOut = () => {
        // Remove the user session
        removeToken(null);
        removeUser();
        
        // Redirect to the login page
        navigate('/');
  }

  // (int) positive, (int) negative, (int) neutral
  // return (array) [positive: 20%, negative, 30%, neutral: 50%]
  const calculateSentiment = (positive, negative, neutral) => {
    var cost = positive + negative + neutral

    positive = (positive/cost) * 100
    negative = (negative/cost) * 100
    neutral  = (neutral/cost) * 100

    return [
      {
        "positive": positive,
        "negative": negative,
        "neutral": neutral
      }
    ]
  }


  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen font-ubuntu overflow-visible">
        {/* Logo and Buttons */}
        <div className="">
          <div className="relative text-gray-800 dark:text-gray-100 w-full mx-auto">
            <div className="mx-auto overflow-hidden pb-3">
              <div className="pt-6 max-w-lg px-4 md:px-0 md:max-w-2xl lg:max-w-6xl mx-auto">
                <div className="flex">
                  
                  <div className="space-x-4 w-full flex text-3xl font-bold items-center">
                    <CashIcon className="w-10 h-10 mr-2.5" />
                    MarketGeek   
                    <SearchBox placeholder="Search for topic" /> 
                  </div>

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
                      <Link to="/search"> 
                     <button type="button" className="mx-2 inline-flex md:hidden items-center px-4 md:px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                        Search
                      </button>
                      </Link>
                  </div>
                </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6">
              <div className="relative border border-gray-100 dark:border-gray-800 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-12 md:shadow-xl lg:h-[34.3em]">
                <div className="w-full pt-8 pb-8 pl-2 pr-2">
                  <img src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" className="w-32 h-32 mx-auto rounded-full border border-gray-600" alt="Profile" />
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
                <div className="md:grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-x-4">
                  <div className="border border-gray-100 dark:border-gray-800 col-span-2 md:col-span-2 pt-8 pb-8 pl-8 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-12 md:shadow-2xl">
                    <h2 className="font-medium text-5xl text-sky-700 leading-[1.5em] dark:text-gray-200">
                      Dashboard
                    </h2>
                    <div className="text-gray-800 dark:text-gray-200 mt-4 text-lg">
                      <h3>
                        Welcome to your dashboard, {user.firstName}! <br />See what's happening with stocks around the world and be the first to know when prices change.
                      </h3>
                    </div>
                  </div>

                  <Widget title="Sentiments"
                          columns="1"
                          view={<h3 className="text-xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal">
                           <div>
                            <div>
                              <div className="mt-6" aria-hidden="true">
                                <div className="bg-gray-200 rounded-full overflow-hidden">
                                  <div className="h-2 bg-green-400 rounded-full" style={{width: positiveSentiment + '%'}}></div>
                                </div>
                                <div className="hidden sm:grid w-full text-sm font-medium text-green-400 mt-2">
                                  <div className="text-green-400">Positive ({positiveSentiment} %)</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="mt-6" aria-hidden="true">
                                <div className="bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-2 bg-yellow-400 rounded-full" style={{width: neutralSentiment + '%'}}></div>
                                </div>
                                <div className="hidden sm:grid w-full text-sm font-medium text-yellow-400 mt-2">
                                  <div className="text-yellow-400">Neutral ({neutralSentiment} %)</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <div className="mt-6" aria-hidden="true">
                                <div className="bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-2 bg-red-400 rounded-full" style={{width: negativeSentiment + '%'}}></div>
                                </div>
                                <div className="hidden sm:grid w-full text-sm font-medium text-yellow-400 mt-2">
                                  <div className="text-red-400">Negative ({negativeSentiment} %)</div>
                                </div>
                              </div>
                            </div>
                           </div>
                          </h3>}
                  ></Widget>

                  <Widget
                          textAlign="left"
                          columns="1"
                          view={
                          <div>
                              <h3 className="text-2xl text-gray-800 dark:text-slate-100 break-words leading-normal font-medium mt-2">
                                Positive Sentiment News
                              </h3>
                              <div className="border-t border-gray-700 mt-4 mb-4"></div>
                              <div className="text-xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal overflow-y-none h-32">
                                
                              { searchResults.map((stock, index) => ( 
                                <div className="flex items-center">
                                  {(() => {
                                    if(searchResults[index].sentiment_id == 0) {
                                      return (
                                        <div className="h-10 flex items-center">
                                          <div className="">
                                            <a href={searchResults[index].url} target="_blank" rel="noreferrer" className="hover:underline text-sky-600 dark:text-gray-200">
                                              <p className="text-xl mt-1 first-letter:uppercase">
                                                {stock.title}.
                                              </p>
                                            </a>
                                          </div>
                                        </div>
                                      )
                                    }
                                  })()}
                                </div>
                              ))}
                            </div>
                          </div>
                          }
                          icon={<CheckCircleIcon className="w-10 h-10 text-green-400 mt-4 mb-4" />}
                  ></Widget>
                </div>

               
              </div>
            </div>
            <Widget title="Top News"
                          view={
                            <div className="text-2xl mt-2 text-gray-800 dark:text-slate-100 break-words leading-normal font-normal  overflow-y-scroll h-[15em]">
                              { popularStocks.map((stock, index) => (
                                <div className="flex items-center mt-8">
                                  <div className="w-10 h-10">
                                    {index + 1}.
                                    </div>
                                    <div className="w-full ml-2">
                                      <a href={stock.article_url} className="hover:underline" target="_blank"><p className="text-xl mt-1">{stock.title}</p></a>
                                      <div className="flex space-x-2">
                                          { popularStocks[index].tickers.map((ticker, i) => {
                                            return (
                                              <p className="block font-light text-lg mt-1 bg-sky-300 w-16 text-center rounded-md text-black">
                                              { popularStocks[index].tickers[i] }
                                              </p>
                                            )
                                          })}

          
                                      </div>
                                    </div>
                                    <div className="flex-shrink-0 float-right">
                                      <p className="font-light text-2xl mt-1">{stock.price} &nbsp;{stock.currency}</p>
                                    </div>
                                </div>
                              ))}
                            </div>
                          }
                  ></Widget>
          </div>
        </div>

          {/* Main Content */}
          <div className="mx-auto max-w-md md:max-w-2xl lg:max-w-6xl">


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