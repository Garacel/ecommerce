import React, { useState,useEffect } from 'react'
import ProductCard from './Componentes/ProductCard';
import "./App.css"
import Header from './Componentes/Header';
import SearchBar from './Componentes/SearchBar'

function App() {
const[products,setProducts]=useState([]);
const [searchText, setSearchText] = useState("");

const handleChangeText = (e) => {
  setSearchText (e.target.value);
};

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then((res)=> res.json())
  .then((prod) => setProducts(prod))
},[]);

  return (
  <div>
  <header>
  <SearchBar onChangeText ={handleChangeText}/>
 <Header/>
   

  </header>

  <article>   <h1>Carrusel</h1>  </article>

  <main>
{products.filter((prod)=>
prod.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
)
.map((p) =>(
   <ProductCard p={p} key={p.id}/> 
))}
</main>
<article> <h2>Ofertas, ect</h2></article>

<footer>Contactanos, redes , info , etc.</footer>

  </div>
  );
}

export default App
