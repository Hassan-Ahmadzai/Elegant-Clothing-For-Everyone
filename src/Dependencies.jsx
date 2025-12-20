import React, { useEffect, useRef, useState } from "react";


function Basic() {
    const [currChar, setCurrChar] = useState("A");
    // const [prevChar, setPrevChar] = useState([]);

    const prevChar = useRef([]);

    useEffect(() => {
        console.log('Re-render is happened');
        // let tempChar = [...prevChar];
        // tempChar.push(currChar);
        // setPrevChar([...tempChar]);
        prevChar.current.push(currChar);
    }, [currChar]);

    return (
        <div>
            <input 
                type="text" 
                value={currChar}
                onChange={(e) => setCurrChar(e.target.value)}
            />
            
            <div>
                {prevChar.current.map((char, index) => (
                    <div key={index}>{char}</div>
                ))}
            </div>
        </div>
    );
};

export default Basic;