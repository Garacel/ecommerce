import React, { useState } from "react";
import  "./Header.css"

function Header(){
const [Active,setActive]=useState();
return(
    
  <form >
       <label className="item1">Productos
        <input type="search" name="search" placeholder="Reloj, Mochila, Anillo..."/>
       </label>
      <button className="item2">Categorias</button>
      <button className="item3">Ofertas</button>
      <button className="item4">Crear tu Cuenta</button>
      <button className="item5">Ingresar</button>
 </form>
      
)
}

export default Header;