import React, { useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.trim() === '') return;
    setTareas([...tareas, tarea]);
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', position: 'absolute', top: '0px', left: '0px'}}>
      <h1>Lista de Tareas</h1>
      <FormularioTarea onAgregar={agregarTarea} />
      <ListaTareas tareas={tareas} onEliminar={eliminarTarea} />
      <p><strong>Total:</strong> {tareas.length} tareas</p>
    </div>
  );
}

export default App;