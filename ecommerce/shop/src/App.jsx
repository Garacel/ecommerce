import React from "react"
import "./App.css"
import { ProductContextProvider } from "./context/ProductsContext"
import { useState } from "react"
import ProductCard from "./Componentes/ProductCard"
import Header from "./Componentes/Header"
import {BrowserRouter,Routes, Route} from "react-router-dom";
function App() {
  const [searchText, setSearchText] = useState('');

  return ( <BrowserRouter>
     
   <ProductContextProvider>
   
   
    <nav>
      
      <Header searchText={searchText} setSearchText={setSearchText}/>
   
      </nav>
     
   <main> 
  
    <ProductCard searchText={searchText}/>

   </main>  

<footer> </footer>


  </ProductContextProvider>
  </BrowserRouter>
  )
  
}

export default App
