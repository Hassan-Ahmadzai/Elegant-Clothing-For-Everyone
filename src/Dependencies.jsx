import React, { useRef, useState } from "react";


function Basic() {
    const [name, setName] = useState("");

    const inputChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <div>
                <label>Username</label>
                <input type="text" onChange={inputChange} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" />
            </div>

            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Basic;