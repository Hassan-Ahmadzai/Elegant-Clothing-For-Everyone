import React, { useRef, useState } from "react";


function Basic() {
    // const [name, setName] = useState("");

    const unameRef = useRef("");
    const pwordRef = useRef("");

    // const inputChange = (e) => {
    //     setName(e.target.value);
    // };

    const login = () => {
        console.log(unameRef.current.value);
        console.log(pwordRef.current.value);
    };

    return (
        <div>
            <div>
                <label>Username</label>
                {/* <input type="text" onChange={inputChange} /> */}
                <input type="text" ref={unameRef} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" ref={pwordRef} />
            </div>

            <div>
                <button onClick={login}>Login</button>
            </div>

            {/* <div>{name}</div> */}
        </div>
    );
};

export default Basic;