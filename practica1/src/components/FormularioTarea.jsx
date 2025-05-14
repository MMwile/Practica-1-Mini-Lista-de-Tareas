import React, { useState } from 'react';

function FormularioTarea({ onAgregar }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => setInput(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAgregar(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea..."
        value={input}
        onChange={handleChange}
      />
      <button type="submit" style={{fontSize: '14px', padding: '1px 15px', marginLeft: '5px'}}>Agregar</button>
    </form>
  );
}

export default FormularioTarea;
