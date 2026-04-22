
import React, { useState } from "react";


function App() {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    return (
        <>
            <Header 
                cart={shoppingCart}
            />
        </>
    );
};

export default App;