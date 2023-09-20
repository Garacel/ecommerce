import React from "react"
import "./App.css"
import { ProductContextProvider } from "./context/ProductsContext"
import { useState } from "react"
import ProductCard from "./Componentes/ProductCard"
import Header from "./Componentes/Header"

function App() {
  const [searchText, setSearchText] = useState('');

  return (
   <ProductContextProvider>
    <nav> <Header searchText={searchText} setSearchText={setSearchText}/> </nav>
    <article>Carrusel</article>
     <ProductCard searchText={searchText}/>
<article>Otro carrusel</article>
<footer></footer>
  </ProductContextProvider>
  )
  
}

export default App
