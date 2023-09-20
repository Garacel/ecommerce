import SearchBar from './SearchBar';

function Header({searchText, setSearchText}) {

  return (
    <header>
      <h1>Shop</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText}/>
    </header>
  );
}

export default Header;
