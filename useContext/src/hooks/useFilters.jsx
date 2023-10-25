import { useContext } from "react";
import { FiltersContext } from "../context/filters";
export function useFilters () {
    // const [filters, setFilters] = useState({
    //     category: 'all',
    //     minPrice: 0,
    // });

    //sacanos los filster del contexto y el set
    const {filters, setFilters} = useContext(FiltersContext)

    const filterProducts = (products) => {
        return products.filter((products) => {
            return (
                products.price >= filters.minPrice &&
                (filters.category === 'all' ||
                    products.category === filters.category)
            );
        });
    };

    return { filters, filterProducts, setFilters }
}
