import React from "react";
import { NavLink } from "react-router-dom";
function NavBar(){
    return(
        <nav>
            <NavLink >Products</NavLink>
            <NavLink  >Cart</NavLink>
        </nav>
    )
}
export default NavBar