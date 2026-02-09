import { useState } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";


function App() {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    

    function handleUpdateCartItemQuantity(productId, amount) {
        setShoppingCart((prevShoppingCart) => {
            const updatedItems = [...prevShoppingCart.items];
            const updatedItemIndex = updatedItems.findIndex(
                (item) => item.id === productId
            );

            const updatedItem = {
                ...updatedItems[updatedItemIndex],
            };

            updatedItem.quantity += amount;

            if (updatedItem.quantity <= 0) {
                updatedItems.splice(updatedItemIndex, 1);
            } else {
                updatedItems[updatedItemIndex] = updatedItem;
            };

            return {
                items: updatedItems,
            };
        });
    };

    return (
        <>
            <Header
                cart={shoppingCart}
                onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
            />
            <Shop onAddItemToCart={handleAddItemToCart} />
        </>
    );
};

export default App;
