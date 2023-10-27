import './PruebaTecnica.css';
import { useRef, useState } from 'react';
import { Movies } from '../components/Movies';
import { useMovies } from '../hooks/useMovie';
import { useSearch } from '../hooks/useSearch';

function PruebaTecnica() {
    const [sort, setSort] = useState(false);
    const { search, error, updateSearch } = useSearch();
    const { movies, gestMovies, loading } = useMovies({ search, sort });

    // const [query, setQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        gestMovies(search);

        /*  //Forma no contralada */
        // const { query } = Object.fromEntries(new FormData(event.target));
        // console.log(query);
        // if (query === '') alert('No se ingreso ninguna pelicula');

        //Esta es otra manera de obtener la referencia del input con el hooks useRef
        // const inpputEl = inputRef.current.value
        // console.log(inpputEl);

        //Forma controlada con useState y el handleChange
        // console.log({query});
    };

    const handleChange = (event) => {
        updateSearch(event.target.value);
    };

    const handleSort = () => {
        setSort(!sort);
    };

    return (
        <div className="page">
            <header>
                <h1>Buscador de peliculas</h1>
                <form
                    className="form"
                    onSubmit={handleSubmit}
                >
                    <input
                        style={{
                            border: '1px solid transparent',
                            borderColor: error ? 'red' : 'transparent',
                        }}
                        className="queryImput"
                        name="query"
                        placeholder="Avengers , Star Wars, The Matrix"
                        value={search}
                        onChange={handleChange}
                    />
                    <input
                        type="checkbox"
                        onChange={handleSort}
                        checked={sort}
                    />
                    <button type="submit">Buscar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>
            <main>
                {loading ? <p>Cargando</p> : <Movies movies={movies} />}
            </main>
        </div>
    );
}

export default PruebaTecnica;
