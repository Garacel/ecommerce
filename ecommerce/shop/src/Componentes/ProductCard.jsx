import "./ProductCard.css"

function ProductCard({p}){

    const onAddProduct =()=>{
        console.log("add");

    }
    return(
    <article>
        <img src={p.image} alt={p.title} />
        <p>{p.price}</p>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
<button onClick={()=>onAddProduct()}>Añadir al Carrito</button>
    </article>
        )
}
export default ProductCard;