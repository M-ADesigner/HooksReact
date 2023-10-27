/* eslint-disable react/prop-types */
import './Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

// eslint-disable-next-line react/prop-types
function Products({ products }) {
    const { addToCart, cart, removeFromCart } = useCart();

    const checkedProductInCart = (product) => {
        return cart.some((item) => product.id === item.id);
    };
    return (
        <main className="products">
            <ul>
                {products.slice(0, 10).map((product) => {
                    const isproductInCart = checkedProductInCart(product);
                    return (
                        <li key={product.id}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                            />
                            <div>
                                <strong>
                                    {product.title} - ${product.price}{' '}
                                </strong>
                            </div>
                            <div>
                                <button
                                    style={{
                                        background: isproductInCart
                                            ? 'red'
                                            : '#09f',
                                    }}
                                    onClick={() => {
                                        isproductInCart
                                            ? removeFromCart(product)
                                            : addToCart(product);
                                    }}
                                >
                                    {isproductInCart ? (
                                        <RemoveFromCartIcon />
                                    ) : (
                                        <AddToCartIcon />
                                    )}
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default Products;
