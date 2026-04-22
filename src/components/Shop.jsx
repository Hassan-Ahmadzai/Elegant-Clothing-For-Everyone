
import React from "react";
import Product from "./Products";
import { DUMMY_PRODUCTS } from "../dummy-products";


export default function Shop({ onAddItemToCart }) {
    return (
        <section id="shop">
            <h2>Elegant Clothing For Everyone</h2>

            <ul id="products">
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}> 
                        <Product 
                            {...product}
                            onAddToCart={onAddItemToCart}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};