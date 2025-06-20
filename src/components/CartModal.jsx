import { forwardRef, useImperativeHandle, useRef, useContext } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';  
import { CartContext } from '../store/shopping-cart-context';

const CartModal = forwardRef(function Modal(
    { title, actions },
    ref
) {
    const dialog = useRef();

    const { items, onUpdateItemQuantity } = useContext(CartContext);

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
            <h2>{title}</h2>
            <Cart />
            <form method="dialog" id="modal-actions">
                {actions}
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default CartModal;
