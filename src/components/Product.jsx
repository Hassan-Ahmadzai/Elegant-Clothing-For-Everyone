import React, { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

function Product({
    id,
    image,
    title, 
    price,
    description,
}) {
    const { addItemToCart } = useContext(CartContext);

    return (
        <article className="product">
            <img src={image} alt={title} />

            <div className="product-content">
                <h3>{title}</h3>
                <p className="product-price">${price}</p>
                <p>{description}</p>
            </div>

            <p className="product-actions">
                <button onClick={() => addItemToCart(id)}>
                    Add to Cart
                </button>
            </p>
        </article>
    )
};

export default Product;