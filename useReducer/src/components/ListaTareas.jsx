/* eslint-disable no-unused-vars */
import { useReducer, useRef } from 'react';

export default function ListaTareas() {
    const inputRef = useRef('');

    const [task, dispatch] = useReducer((state = [], action) => {
        switch (action.type) {
            case 'add_task': {
                return [...state, { id: state.length, title: action.title }];
            }
            default: {
                return state;
            }
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'add_task',
            title: inputRef.current.value,
        });
        console.log('funciona');
    };

    return (
        <div>
            <h1> Listar Tareas</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Tarea</label>
                <input
                    type="text"
                    name="title"
                    ref={inputRef}
                />
                <input
                    type="submit"
                    name="Enviar"
                />
            </form>

            <div className='tasks'>
                {task.map( (tas) => (
                    <div className="task" key={tas.id}>{tas.title}</div>
                ))}
            </div>
        </div>
    );
}
