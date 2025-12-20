import React, { useEffect, useRef, useState } from "react";


function Basic() {
    const [currChar, setCurrChar] = useState("A");
    const [prevChar, setPrevChar] = useState([]);

    useEffect(() => {
        console.log('Re-render is happened');
        let tempChar = [...prevChar];
        tempChar.push(currChar);
        setPrevChar([...tempChar]);
    }, currChar);

    return (
        <div>
            {/* <div>{name}</div> */}
        </div>
    );
};

export default Basic;