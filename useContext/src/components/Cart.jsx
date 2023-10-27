import './Cart.css';
import { useId } from 'react';
import { ClearCartIcon, CartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

// eslint-disable-next-line react/prop-types
function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small>Qty: {quantity}</small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    );
}

export default function Cart() {
    const cartCheckboxId = useId();
    const { cart, cleartCart, addToCart } = useCart();

    return (
        <>
            <label
                htmlFor={cartCheckboxId}
                className="cart-button"
            >
                <CartIcon />
            </label>
            <input
                id={cartCheckboxId}
                type="checkbox"
                hidden
            />

            <aside className="cart">
                <ul>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <button onClick={cleartCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    );
}
