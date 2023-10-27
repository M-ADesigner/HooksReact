import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previusSearch = useRef({ search });

    //Cada vez que se detecta algun cambio en search esta se ejecuta
    const gestMovies = useCallback(
        async (search) => {
            /* console.log(previusSearch.current); */
            //Si el estado anterior es igual esta que no haga la llamada
            if (previusSearch.current === search) return;
            try {
                setLoading(true);
                setError(null);
                previusSearch.current = search;
                const Newmovies = await searchMovies({ search });
                setMovies(Newmovies);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        },
        [search],
    );

    //APLCIANDO USEMEMO
    //Cuando cambie el sort y movies, quiero que se vuelva a ejecuta esta funcion

    /*    En otras palabras, "useMemo" se utiliza para memorizar el resultado de una función de tal manera que si los valores de entrada no cambian, el resultado almacenado en memoria se reutiliza en lugar de volver a calcularlo. Esto puede resultar útil en casos en los que se necesite realizar cálculos intensivos o costosos en términos de recursos, como operaciones matemáticas complejas o llamadas a API. */

    const sortedMovies = useMemo(() => {
        console.log('memo sorted movies');

        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies;
    }, [sort, movies]);

    return { movies: sortedMovies, gestMovies, loading, error };
}

/* 
la principal diferencia entre "useMemo" y "useCallback" es que "useMemo" se usa para memorizar valores calculados, mientras que "useCallback" se usa para memorizar funciones callback. Ambos ganchos toman un arreglo de dependencias, y cuando una o más de estas dependencias cambian, los valores o funciones se recalculan o recrean, respectivamente. Utilizar estos hooks adecuadamente puede ayudar a mejorar el rendimiento de una aplicación React al evitar cálculos innecesarios y renderizaciones no deseadas. */

//TODO
/* USEMEMO PARA CUALQUIER COSA, 
USECALLBACK PÀRA FUNCIONES */