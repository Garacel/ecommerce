
function SearchBar  ({searchText, setSearchText}) {
    const handleSearchChange = (e) => {
          setSearchText(e.target.value);
        };

    return(
        <form >
            <label htmlFor="">Productos</label>
        <input 
        type="search"
        name="search"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Buscar..." />
        </form>
    )
};

export default SearchBar