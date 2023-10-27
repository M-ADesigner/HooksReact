import { createContext, useReducer } from 'react';
import { cartREeducer, initialState } from '../reducer/cart';
export const CartContext = createContext();

function useCartReducer() {
    const [state, dispatch] = useReducer(cartREeducer, initialState);

    const addToCart = (product) =>
        dispatch({
            type: 'ADD_TO_CART',
            payload: product,
        });
    const removeFromCart = (product) =>
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product,
        });
    const cleartCart = () =>
        dispatch({
            type: 'CLEAR_CART',
        });

    return { state, addToCart, removeFromCart, cleartCart };
}
// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, cleartCart } = useCartReducer();

    return (
        <CartContext.Provider
            value={{
                cart: state,
                addToCart,
                cleartCart,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
