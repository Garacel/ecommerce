import "./ProductCard.css"

function ProductCard({p}){
    return(
    <article>
        <img src={p.image} alt={p.title} />
        <p>{p.price}</p>
        <h3>{p.title}</h3>
        <p>{p.description}</p>

    </article>
        )
}
export default ProductCard;