import React, { useState } from "react";


function Dependencies() {
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);
    const [countries, setCountries] = useState(["India", "USA", "Pakistan"]);
    const [user, setUser] = 

    const increase = () => {
        setCount(count + 1);
    };

    const showContent = () => {
        setShow(true);
    };

    const addCountry = () => {
        countries.push("Germany");
        setCountries(countries);
    };

    const changeUser = () => {
        UserActivation.
    }

    return (
        <div>
            Dependencies
        </div>
    )
};

export default Dependencies;