import './PruebaTecnica.css';
import { useRef, useState } from 'react';
import { Movies } from '../components/Movies';
import { useMovies } from '../hooks/useMovie';
import { useSearch } from '../hooks/useSearch';

function PruebaTecnica() {
    const { movies: mappedMovies } = useMovies();
    const { search, updateSearch, error } = useSearch();

    // const [query, setQuery] = useState('');
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

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
                        className='queryImput'
                        name="query"
                        ref={inputRef}
                        placeholder="Avengers , Star Wars, The Matrix"
                        value={search}
                        onChange={handleChange}
                    />
                    <button type="submit">Buscar</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>
            <main>
                <Movies movies={mappedMovies} />
            </main>
        </div>
    );
}

export default PruebaTecnica;
