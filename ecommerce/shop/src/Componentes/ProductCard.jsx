
import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import "./ProductCard.css"
import { useState } from "react";
import {MdOutlineExpandMore} from"react-icons/md";

const ProductCard = ({searchText}) => {


  const [isFullDescription, setIsFullDescription] = useState(false);
const handleExpand = ()=>{
 
  setIsFullDescription(!isFullDescription)
};


  const {products,isLoading,error}= useContext (ProductContext);
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchText.toLowerCase()) || product.category.toLowerCase().includes(searchText.toLowerCase())
);
    
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
      <div className="Products">


      {filteredProducts.length ? (
        <>
        {filteredProducts.map((p)=>(
          <div className="cardProduct" key={p.id} >

         <h3>{p.title}</h3>
        <div className="ProductCard">
          <img src={p.image} alt={p.title} />
          <div>
        <h3>{p.category}</h3>
        <h2 >${p.price}</h2>
        <button >Buy Now</button>
        </div>
        </div>
        {isFullDescription? (<span>{p.description}<MdOutlineExpandMore  onClick={handleExpand}/></span>)
        :
        <span>{p.description.slice(0,40)}....<MdOutlineExpandMore onClick={handleExpand}/> </span>
        
        }
      </div>
     
     ))}
        </>
          ) : (
            <p className="noProducts">No se encontraron productos que coincidan con la búsqueda... </p>
          )}
      
     </div>
      )

}
export default ProductCard;