import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Contador() {
    const timer = useRef(0);

    const [cont, setCont] = useState(0);

    useEffect(() => {
        timer.current = setInterval(() => setCont((cont) => cont + 1), 1000);
        console.log('renderizado');
    }, []);

    const handleClick = () => {
        setCont(clearInterval(timer.current))
    };


    return (
        <div>
            <div>Cont: {cont}</div>
            <button onClick={handleClick}>PARA!</button>
        </div>
    );
}
