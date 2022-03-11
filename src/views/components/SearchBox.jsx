import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";


const SearchBox = (props,{ searchQuery, setSearchQuery }) => {
    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        navigate(`?s=${searchQuery}`);
    };

    return (
        <div className="max-w-xl items-center rounded-md">
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
            className="ml-4 dark:border-gray-800"
        >
            <div className="max-w-xl hidden md:flex items-center rounded-md pl-4 text-lg  border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-gray-800/50 py-0.5">
            <SearchIcon className="w-4 h-4 mr-2"/>     
            <input
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
                type="text"
                id="header-search"
                placeholder={props.placeholder}
                name="s"              
                aria-hidden="true"
                className="focus:outline-none dark:bg-gray-800/50 bg-white/90"
            />               
             </div>                      
           </form>
         </div>
    );
};

export default SearchBox;






