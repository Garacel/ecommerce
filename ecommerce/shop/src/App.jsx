import React, { useState,useEffect } from 'react'
import ProductCard from './Componentes/ProductCard';
import "./App.css"
import Header from './Componentes/Header';

function App() {
const[products,setProducts]=useState([]);
useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
  .then((res)=> res.json())
  .then((prod) => setProducts(prod))
},[]);

  return (
  <div>
  <header>
 <Header/>
   

  </header>

  <article>   <h1>Carrusel</h1>  </article>

  <main>
{products.map((p) =>(
   <ProductCard p={p} key={p.id}/> 
))}
</main>
<article> <h2>Ofertas, ect</h2></article>

<footer>Contactanos, redes , info , etc.</footer>

  </div>
  );
}

export default App
