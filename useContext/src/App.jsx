import { products as InitialProducts } from './mock/product.json';
import Products from './components/Products';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOMENT } from './config';
import { useFilters } from './hooks/useFilters';
import Cart from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
    const { filterProducts } = useFilters();

    const filteredProducts = filterProducts(InitialProducts);

    return (
        <CartProvider>
            <Header />
            <Cart />

            <Products products={filteredProducts} />

            {IS_DEVELOMENT && <Footer />}
        </CartProvider>
    );
}

export default App;
