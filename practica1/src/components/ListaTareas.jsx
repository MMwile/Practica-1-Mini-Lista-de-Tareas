import React from 'react';

function ListaTareas({ tareas, onEliminar }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <li key={index} style={{ margin: '10px 0'}}>
          {tarea}{' '}
          <button onClick={() => onEliminar(index)} style={{ marginLeft: '0px', fontSize: '20px', backgroundColor: 'red',
            border: '1px solid', padding: "1px 8px", borderRadius: '5px'}}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
