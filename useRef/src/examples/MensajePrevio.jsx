import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MensajePrevio() {
    const [mensaje, setMensaje] = useState('');
    const prevMensaje = useRef('');
    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje]);

    const modifiqueMensaje = (e) => {
        setMensaje(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                onChange={modifiqueMensaje}
            />
            <p>Mensaje: {mensaje}</p>
            <p>Renderizacion anterior: {prevMensaje.current}</p>
        </div>
    );
}
