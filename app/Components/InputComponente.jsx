
import React from 'react';
import styles from"./InputComponent.module.css"

const InputComponente = ({ top, left, color, onChange, id, respuesta }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
  
    if (/^\d{0,2}$/.test(inputValue) || inputValue === "") {
      // Solo actualiza el estado si el valor ingresado es un número o está vacío
      const inputNumber = inputValue === "" ? "" : parseInt(inputValue, 10);
      onChange(id, inputNumber);
    }
  };
  
  return (
<div className={styles.containerCirculo} style={{ backgroundColor:color,top,left}}>
  <input className={styles.inputCirculo}
    type="text"
    value={respuesta !== undefined ? respuesta : ''}
    onChange={handleChange}
  />
</div>
  );
};

export default InputComponente;
