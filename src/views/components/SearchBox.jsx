import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';


const SearchBox = (props) => {
    const [searchField, setSearchField] = useState(props.value)

    return (
        <div className={props.hiddenMobile ? "hidden md:flex max-w-xl items-center rounded-md" : "max-w-xl items-center rounded-md lg:flex"}>
        <form
            action="/search"
            method="GET"
            autoComplete="off"
            className={"dark:border-gray-800 flex"}
        >
            <div className={"flex max-w-xl items-center rounded-md pl-4 text-lg  border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-800 py-1.5"}>
            <SearchIcon className="w-4 h-4 mr-2"/> 
            <input
                type="text"
                id="header-search"
                placeholder={props.placeholder}
                name="q"              
                aria-hidden="true"
                value={searchField}
                className="focus:outline-none dark:bg-gray-800 bg-white/90"
                onChange={(event) => setSearchField(event.target.value)}
            />         
             </div>   
             <div className={props.showButton ? "flex" : "hidden"}>
                <button type="submit" className="bg-sky-700 hover:bg-sky-700/80 text-white px-4 py-1.5 items-center text-lg rounded-md ml-2">
                    Search
                </button>
            </div>                  
           </form>
         </div>
    );
};

export default SearchBox;






