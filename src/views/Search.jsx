/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Search page
 **/

// Import React packages
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";

// Import components
import SearchBox from "./Components/SearchBox";

// Import icons from Heroicons
import { CashIcon } from '@heroicons/react/outline'

// Import utilities
import { getUser, removeToken, removeUser } from "../Utils/User";

// Import hooks
import { fetchPrice, fetchTicker } from "../Hooks/financialFetch";

// Import test json files
import searchResults from "../Tests/searchResults.json"

// Search Page Component
const Search = () => {

     // Retrieve user session
    const userSession = getUser(); // user, null

    // Initliase default values for users not signed in
    var user = {
      name: (""),
      email: (""),
      firstName:(""),
      lastName: (""),
      role: -1
    }


    // Update user object if user session exists
    if(userSession) {
      user = {  
        name: userSession.name,
        email: userSession.email,
        firstName: userSession.name.split(" ")[0],
        lastName: userSession.name.split(" ")[1],
        role: 1
      }
    }


    // Indicator (Green, Red, Yellow) for the search results
    function IndicatorCircle(result) {
      switch(result) {
        case 0:
          return (
            <div className="flex-col mt-2 w-10 h-10 rounded-full bg-green-400">
             </div>          
          )
        case 1:
          return(
            <div className="flex-col mt-2 w-10 h-10 rounded-full bg-red-400">
            </div>  
          )
        case 2:
          return(
            <div className="flex-col mt-2 w-10 h-10 rounded-full bg-yellow-400">
            </div>
          )
        default:
          return (
            <div className="flex-col mt-2 w-10 h-10 rounded-full bg-green-400">
            </div>          
          )
      }
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

  
  // Retrieve search params
  const [searchParams] = useSearchParams()

  // Get query from URL
  var name = searchParams.get("q")

  // Set name to an empty string if null
  if(name === null) { name = "" }

  // Define states for the result symbol, price and company
  const [searchSymbol, setSearchSymbol] = useState('')
  const [searchSymbolPrice, setSearchSymbolPrice] = useState(0)
  const [searchCompany, setSearchCompany] = useState(' ')

  // Fetch ticker and price when component is loaded
  useEffect(() => { 
    // Run the ticker and store value in result once loaded
    fetchTicker(name).then((result) => {
        // Update states
        setSearchSymbol(result.ticker)
        setSearchCompany(result.name)

        // Run the price with result as the argument and store price in result2
        fetchPrice(result.ticker).then((result2) => { 

        // Set the price
        setSearchSymbolPrice(result2)
      })
    }) 
  })
  
  // Convert results into an array to map through
  var data = Array.from(searchResults);

  // Return the JSX page
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen font-ubuntu overflow-visible">
        {/* Logo and Buttons */}
        <div className="">
          <div className="relative text-gray-800 dark:text-gray-100 w-full mx-auto">
            <div className="mx-auto overflow-hidden pb-3">
              <div className="pt-6 max-w-2xl px-2 md:max-w-4xl lg:max-w-screen-xl mx-auto">
                <div className="flex">
                  
                  <div className="space-x-4 w-full flex text-3xl font-bold items-center">
                    <a href="/" className="inline-flex items-center">
                      <CashIcon className="w-10 h-10 mr-2.5" />
                      MarketGeek 
                    </a>  
                      <SearchBox value={name} placeholder="Search for topic" /> 
                  </div>

                  <div className="flex flex-shrink-0 justify-end">
                    { userSession && user.role === 1 && 
                        <div className="mr-6">
                          <button type="button" className="hidden lg:inline-flex items-center px-4 md:px-4 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-gray-700/80 hover:bg-gray-700/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition ease-in">
                            Internal Area
                          </button>
                        </div>
                    }

                    { userSession ?
                      <button type="button" className="inline-flex items-center px-4 md:px-4 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-red-600/80 hover:bg-red-500/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in" onClick={signOut}>
                        Sign Out
                      </button>
                      :
                      <div className="w-full justify-end flex items-center">
                        <Link to='/' className="mx-2 inline-flex items-center px-4 md:px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                          Go home
                        </Link>
                      </div>
                    }
                    
                    <Link to="/search"> 
                      <button type="button" className="mx-2 inline-flex md:hidden items-center px-4 md:px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                        Search
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          {/* Main Content */}
          <div className="mx-auto max-w-2xl px-4 md:max-w-4xl lg:max-w-screen-xl mt-8"> 
            <div className="w-full text-3xl">
              <h3 className="text-4xl font-bold">Search</h3>
                <div className="max-w-xl rounded-md mt-4">
                  <SearchBox value={name} placeholder="Search for topic" /> 
                    <div className="max-w-lg pt-0.5 pb-8">                                  
                      <div className="flex flex-row space-x-4  text-gray-800 dark:text-gray-200 mt-4 mx-auto">
                        <div className=" text-center">
                            <button type="button" className="inline-flex items-center px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                              All
                            </button>
                        </div>
                        <div className="text-center">
                            <button type="button" className="inline-flex items-center px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                              News
                            </button>
                        </div>
                        <div className="text-center">
                            <button type="button" className="inline-flex items-center px-6 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-white bg-sky-800/80 hover:bg-sky-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition ease-in">
                            Securities
                            </button>
                        </div>
                      </div>

                      <div className="space-x-4 pt-[2rem] text-2xl font-bold">
                        {name === "" ? 
                          <h2 className="text-xl inline-flex font-medium"><span className="font-light">No keyword entered</span></h2>
                        :
                          <h2 className="text-xl inline-flex font-medium">Results for: <span className="font-light ml-2.5">”{name}”</span></h2> 
                        }
                      </div>
                    </div>
                  </div>
           
                  <div className="flex flex-col-reverse md:flex-row space-y-reverse">
                    <div className="w-full">
                      { data.map((result, index) => (  
                      <div>
                        {(() => {
                          if(searchResults[index].title.toLowerCase().includes(name.toLowerCase()) || searchResults[index].body.includes(name)) {
                            return (
                              <div className="flex flex-col mt-6"> 
                                <div className="flex">           
                                    <div className="w-16">
                                        { IndicatorCircle(result.sentiment_id) }    
                                    </div>
            
                                    <div className="mt-2 ml-5">
                                        <p className=" font-semibold first-letter:uppercase">{result.title}</p>
                                        <div>
                                          <a href={result.url} target="_blank" rel="noreferrer" className="text-sm text-sky-600 underline">{result.url}</a>
                                        </div>
                                        <div className="text-sm font-light mt-2 max-w-2xl break-words first-letter:uppercase">
                                          <p className="">{result.body.slice(2, 520)}</p>
                                        </div>
                                    </div>
                                </div>  
                              </div>    
                            )
                          }
                        })()}
                      </div>    
                  ))}   
                  
                  <p className="text-center text-base mt-4 mb-4  font-semibold">No more news articles found, please try a different keyword.</p>
              </div>

              { searchSymbolPrice !== 0 &&
                <div className="w-full lg:w-1/4 bg-sky-100 dark:bg-sky-700/90 border border-sky-300 dark:border-sky-900/90 rounded-md lg:ml-8 dark:text-slate-200 h-full pb-12 pt-6">
                  <div className="p-2 rounded-md">
                      <div>
                        <h2 className="text-2xl font-medium mt-2 truncate items-center">
                          {searchCompany} 
                          <p className="text-sm font-light">({searchSymbol})</p>
                        </h2>
                        <br/>
                        <p>{searchSymbolPrice} USD</p>
                      </div>
                  </div>
                </div>
              }
            </div>
          </div>
            {/* Footer */}
           </div>
           </div>              
          </div>
        </div> 
  );
 
};

export default Search;
