## useRef

El hook `useRef` en React se utiliza para mantener referencias mutables que persisten a lo largo de los ciclos de vida de un componente. A diferencia de las referencias regulares, `useRef` no provoca una nueva renderización cuando su valor cambia. Este hook es comúnmente utilizado para acceder a nodos del DOM de forma imperativa, mantener valores que no requieren una actualización del estado (renderizacion completa), o preservar valores mutables entre renderizados.

Puedes usar useRef en casos específicos en los que necesitas acceder directamente a elementos del DOM, mantener valores sin provocar renderizaciones adicionales o preservar referencias entre renderizados.

### Ejemplo básico de uso:

```jsx
import React, { useRef, useEffect } from 'react';

const ExampleComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Enfocar entrada</button>
    </div>
  );
};
