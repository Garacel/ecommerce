import SearchBar from './SearchBar';
import "./Header.css";


function Header({searchText, setSearchText}) {

  return (
    <header>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
   
  </header>
  );
}

export default Header;
