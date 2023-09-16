const SearchBar = ({setSearchText}) => {
    const handleSearch = (e)=> {
        setSearchText(e.target.vale);
    };
    return(
        <form >
            <label htmlFor="">Productos</label>
        <input 
        onChange={handleSearch}
        type="search"
        name="search"
        placeholder="reloj, tv , mochila" />
        </form>
    )
};
export default SearchBar