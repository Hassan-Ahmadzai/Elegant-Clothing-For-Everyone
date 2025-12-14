import React, { useState } from "react";
import Child from "./Child";

function Parent() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <div>
                <button onClick={() => setShow(!show)}>Toggle</button>
            </div>

            <div>{show ? <Child /> : null}</div>
        </div>
    )
};

export default Parent;