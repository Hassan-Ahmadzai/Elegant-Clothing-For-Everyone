import { useEffect, useState } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products";
import Product from "./components/Product";
import CartContextProvider from "./store/shopping-cart-context";


function App() {
    const [users, setUsers] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    const fetchData = async () => {
        console.log("Getting data from server");
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        setUsers(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div>Users</div>
            {users?.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
        </div>
    );
};

export default App;
 