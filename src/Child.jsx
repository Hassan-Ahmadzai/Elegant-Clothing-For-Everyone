import React, { useEffect } from "react";


function Child() {
    let count = 0;

    useEffect(() => {
        let myInterval = setInterval(() => {
            count++;
            console.log("count is ", count);
        }, 1000);

        return () => {
            console.log("component is destroyed");

            if (myInterval) {
                clearInterval(myInterval);
            };
        };
    }, []);

    return (
        <div>
            Child Component
        </div>
    );
};

export default Child;