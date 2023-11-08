
import React, { useState } from 'react';

const InputComponente = ({ top, left, color, onChange }) => {
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const inputNumber = event.target.value.replace(/\D/, '').slice(0, 1);
    setNumber(inputNumber);
    onChange(inputNumber !== '' ? inputNumber : undefined); // Modificamos esto para manejar el caso de una cadena vacía
  };

  return (
    <div style={{ position: 'absolute', top, left, width: '25px', height: '25px', borderRadius: '50%', backgroundColor: color}}>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', border: 'none', background: 'transparent', outline: 'none', color: 'white' }}
      />
    </div>
  );
};

export default InputComponente;
