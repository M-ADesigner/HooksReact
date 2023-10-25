import { products as InitialProducts } from './mock/product.json';
import Products from './components/Products';
import { useState } from 'react';
import Header from './components/Header';

function App() {
    const [products] = useState(InitialProducts);

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    });

    const filterProduct = (products) => {
        return products.filter((products) => {
            return (
                products.price >= filters.minPrice &&
                (filters.category === 'all' ||
                    products.category === filters.category)
            );
        });
    };

    const filteredProducts = filterProduct(products);

    return (
        <div>
            <Header/>

            <Products products={filteredProducts} />
        </div>
    );
}

export default App;
