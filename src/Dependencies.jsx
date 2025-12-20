import React, { useEffect, useRef, useState } from "react";


function Basic() {
    const [currChar, setCurrChar] = useState("A");
    const [prevChar, setPrevChar] = useState([]);

    useEffect(() => {
        console.log('Re-render is happened');
        let tempChar = [...prevChar];
        tempChar.push(currChar);
        setPrevChar([...tempChar]);
    }, [currChar]);

    return (
        <div>
            <input 
                type="text" 
                value={currChar}
                onChange={(e) => setCurrChar(e.target.value)}
            />
            
            <div>
                {prevChar.map((char, index) => (
                    <div key={index}>{char}</div>
                ))}
            </div>
        </div>
    );
};

export default Basic;