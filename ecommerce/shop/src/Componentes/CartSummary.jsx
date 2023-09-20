import React from "react";
import{MdShoppingCart} from "react-icons/md";
import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";
import {Link} from "react-router-dom";
function CartSummary(){
    const {cart} =useContext (ProductContext);
    return cart?.length? (
        <Link to={"/cart"} >
    <MdShoppingCart></MdShoppingCart>
    </Link>
 ): (
    <p>No Products in the cart</p>
 );
}

export default CartSummary;