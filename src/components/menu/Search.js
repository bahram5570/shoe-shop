import { FaSearch } from "react-icons/fa";

const Search = () => {
    return ( 
        <div className="flex mr-6">
            <label htmlFor="search" className="flex items-center text-neutral-50 mr-2"><FaSearch className="mr-1" />Search:</label>
            <input id="search" type="text" placeholder="e.g. Skechers" className="px-2 rounded-md outline-none" />
        </div>
     );
}
 
export default Search;