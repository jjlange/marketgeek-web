import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
import { useState } from 'react';


const SearchBox = (props,{ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const [searchField, setSearchField] = useState(props.value)

    return (
        <div className="max-w-xl items-center rounded-md">
        <form
            action="/search"
            method="GET"
            autoComplete="off"
            className="dark:border-gray-800"
        >
            <div className="max-w-xl hidden md:flex items-center rounded-md pl-4 text-lg  border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-800 py-[4px]">
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
           </form>
         </div>
    );
};

export default SearchBox;






