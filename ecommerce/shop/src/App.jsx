import React from "react"
import "./App.css"
import { ProductContextProvider } from "./context/ProductsContext"
import ProductCard from "./Componentes/ProductCard"
import SearchBar from "./Componentes/SearhBar"
import Header from "./Componentes/Header"

function App() {
  return (
   <ProductContextProvider>
    <nav> <Header/> </nav>
    <article>Carrusel</article>
     <ProductCard/>
<article>Otro carrusel</article>
<footer></footer>
  </ProductContextProvider>
  )
  
}

export default App
