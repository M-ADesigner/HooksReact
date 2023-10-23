import { useEffect, useState } from 'react';
import './App.css';

const dataInicial = [
    {
        id: '1',
        name: 'test',
    },
    {
        id: '2',
        name: 'test 2',
    },
];

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataInicial);
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    {data.map((D) => (
                        <ul key={D.id}>
                            <li>{D.id}</li>
                            <li>{D.name}</li>
                        </ul>
                    ))}
                </div>
            ) : (
                <div>Cargando ...</div>
            )}
        </div>
    );
}

export default App;
