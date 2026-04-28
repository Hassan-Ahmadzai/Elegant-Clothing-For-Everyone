
import React, { useRef } from "react";


export default function Header({ cart, onUpdateCartItemQuantity }) {
    const modal = useRef();

    const cartQuantity = cart.items.length;

    function handleOpenCartClick() {
        modal.current.open();
    };

    let modalActions = <button>Close</button>

    if (cartQuantity > 0) {
        modalActions = (
            <>
                <button>Close</button>
                <button>Checkout</button>
            </>
        );
    };

    return (
        <>
            <CartModal />

            <header id="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1>Elegant Context</h1>
                </div>

                <p>
                    <button>
                        Cart ({})
                    </button>
                </p>
            </header>
        </>
    );
};