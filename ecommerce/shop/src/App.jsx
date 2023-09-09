import { useState,useEffect } from 'react'
import ProductCard from './Componentes/ProductCard';
import "./App.css"

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
    <h1> Barra de busqueda menu , ect..</h1>
  </header>

  <article1> Carrusel </article1>

  <main>
{products.map((p) =>(
   <ProductCard p={p} key={p.id}/> 
))}
</main>

<article2> Segundo Carrusel o nose .-.</article2>
<footer>Contactanos, redes , info , etc.</footer>

  </div>
  );
}

export default App
