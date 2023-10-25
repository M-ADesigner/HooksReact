import './Products.css';
import { AddToCartIcon } from './Icons';

import React from 'react';

function Products({ products }) {
    return (
        <main className="products">
            <ul>
                {products.slice(0,10).map((product) => (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        />
                        <div>
                            <strong>{product.title}  - ${product.price} </strong>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Products;
