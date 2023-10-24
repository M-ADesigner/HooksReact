## useState

El hook `useState` es una característica clave en React que permite a los componentes funcionales tener estado. Se utiliza para declarar una variable de estado y su función de actualización correspondiente. Este hook retorna un array con dos elementos: el valor actual del estado y una función que permite actualizarlo.

### Uso básico:

```jsx
import React, { useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};
```

En este ejemplo, useState inicializa el estado count en 0 y provee la función setCount para actualizar su valor. Al hacer clic en el botón, se incrementa el valor de count en 1 y se renderiza en la interfaz.