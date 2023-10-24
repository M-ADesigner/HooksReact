import { useState } from 'react';
import './App.css';

function App() {
    /* El valor inicial es 0 */
    const [counter, setCounter] = useState(0);

    // const handleAdd = () => {
    //     setCounter(counter + 1);
    // };


    //Otra manera de hacerlo
    const handleAdd = () => {
        setCounter((c)  => c+1)
    }


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
        </>
    );
}

export default App;
