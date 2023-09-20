import SearchBar from './SearchBar';
import "./Header.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';


function Header({searchText, setSearchText}) {

  return (
 
    <header>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
   
     
  </header>

 
  );
}

export default Header;
