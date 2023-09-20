import { createContext,useState, useEffect } from "react";
import { initialProduct } from "../Service/initialProduct";
import { getAllProducts } from "../Service/ProductService";
export const ProductContext = createContext(initialProduct);

export const ProductContextProvider = ({children})=>{
    
    const[products ,setproducts] =useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const[error,setError] =useState(null);

 const [cart,updateCart] = useState ([]);
const addToCart = (prod)=>{
    updateCart(prod);
};


const fethData = async () => {
    try{
        setError(null);
        setIsLoading(true);
        const data =await getAllProducts();
        setproducts(data);
    }
    catch (error){
        console.error(error);
        setError(error.message);
    }finally {
        setIsLoading(false);
    }
};      
useEffect(()=>{
    fethData();
},[]);
return(
    <ProductContext.Provider
    value={{products, isLoading, error,addToCart}}>
        {children}
    </ProductContext.Provider>
);
};
