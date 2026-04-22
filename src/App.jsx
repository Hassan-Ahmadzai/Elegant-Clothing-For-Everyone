
import React, { useState } from "react";
import Header from "./components/Header/Header";


function App() {
    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });

    

    return (
        <div>
            <Header />
        </div>
    );
};

export default App;