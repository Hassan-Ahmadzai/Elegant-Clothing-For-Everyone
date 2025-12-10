import { useState } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";
import Product from "./components/Product";
import CartContextProvider from "./store/shopping-cart-context";


function App() {
    // let count = 0;
    // const [count, setCount] = useState(0);

    console.log(useState(0));

    const increase = () => {
        // count++;
        setCount(count + 1);
        console.log("count: ", count);
    }

    return (
        <div>
            <div>{count}</div>

            <div>
                <button onClick={increase}>Increase</button>
            </div>
        </div>
    );
};

export default App;
 