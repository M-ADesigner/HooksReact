import { products as InitialProducts } from './mock/product.json';
import Products from './components/Products';
 import Header from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOMENT } from './config';
import { useFilters } from './hooks/useFilters';

function App() {
    const { filterProducts } = useFilters();

    const filteredProducts = filterProducts(InitialProducts);

    return (
        <div>
            <Header />

            <Products products={filteredProducts} />

            {IS_DEVELOMENT && <Footer />}
        </div>
    );
}

export default App;
