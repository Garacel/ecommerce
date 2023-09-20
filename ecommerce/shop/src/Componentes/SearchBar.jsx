import "./SearchBar.css"
import { AiOutlineSearch } from 'react-icons/Ai';
function SearchBar  ({searchText, setSearchText}) {
    const handleSearchChange = (e) => {
          setSearchText(e.target.value);
        };

    return(
        <form >
            
        <input 
        type="search"
        name="search"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search Products or Category" />
        <label htmlFor="">  </label>
      
        </form>
        
    )
};

export default SearchBar