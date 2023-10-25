import { createContext, useState } from 'react';

//paso 1 crear el contexto
//Este es el que consumimos
export const FiltersContext = createContext();

//Ahora tenemos que crear el provider, para proveer el contexto (es el que va envolver nuestra aplicacion)
//Este paso es el que nos provee acceso al contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    });
    return (
        <FiltersContext.Provider
            value={{
                filters,
                setFilters,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
}
