
import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import "./ProductCard.css"
import { useState } from "react";

const ProductCard =()=>{
    
    const {products,isLoading,error}= useContext (ProductContext);
    if(isLoading)
    return(
<div>
    <h2>Cargando..</h2>
</div>
        );
        if(error)
        return(
    <div>
        <h2> {error} </h2>
    </div>
            );
    
    return(

        
      products?.length && (
        <>
        {products.map((p)=>(
         <div className="cardProduct" key={p.id}>
         <h3>{p.title}</h3>
        <img src={p.image} alt={p.title} />
        <p >${p.price}</p>
        <button >comprar</button>
      </div>
     
        ))}
        </>
      )

        )
}
export default ProductCard;