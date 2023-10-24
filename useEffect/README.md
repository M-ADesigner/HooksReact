## useEffect

El hook `useEffect` en React se utiliza para realizar efectos secundarios en componentes funcionales. Estos efectos pueden ser operaciones de lado, como el acceso a datos externos o la manipulación directa del DOM. `useEffect` se ejecuta después de cada renderizado y tiene la capacidad de limpiar los efectos anteriores antes de aplicar los nuevos.

### Uso básico:

```jsx
import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Lógica de efecto secundario
    fetchData().then((result) => {
      setData(result);
    });
  }, []); // El segundo argumento vacío indica que el efecto se ejecuta solo una vez al montar el componente 
          // Esta parte es opopcional, pero si no se indica ninguna condicional, esta se renderiza, cada vez que un componente cualqueira se renderice

  return (
    <div>
      {data ? (
        <p>{data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
