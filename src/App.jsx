import React, { useState } from 'react';
import Header from './components/Header';
import Shop from './components/Shop';
import { DUMMY_PRODUCTS } from './dummy-products';
import Product from './components/Product';
import { CartContext } from './store/shopping-cart-context';


function App() {
    

    return (
        <CartContext.Provider value={ctxValue}>
            <Header />
            <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product
                            {...product}
                            onAddToCart={handleAddItemToCart}
                        />
                    </li>
                ))}
            </Shop>
        </CartContext.Provider>
    );
};

export default App;