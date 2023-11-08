
import React, { useState } from "react";
import ImagenComponente from "./ImagenComponente";
import InputComponente from "./InputComponente";
import OpcionesRespuesta from "./OpcionesRespuesta";
import styles from "./InputComponent.module.css";
import { configJuego, respuestasCorrectas } from "./ConfigJuego";

const Juego = () => {
  const [respuestas, setRespuesta] = useState({});
  const [resultado, setResultado] = useState(null);

  const cambioRespuesta = (id, value) => {
    const respuestaNumero = value !== "" ? parseInt(value, 10) : undefined;
    setRespuesta({ ...respuestas, [id]: respuestaNumero });
  };

  const comprobarRespuesta = () => {
    const respuestasCorrecta = configJuego.options.every((option) => {
      const respuesta = respuestas[option.id];
      const esCorrecta =
        respuesta !== undefined && respuesta === respuestasCorrectas[option.id];

      return esCorrecta;
    });

    // Establece el resultado
    setResultado(respuestasCorrecta ? "Aprobado" : "No Aprobado");
  };

  return (
    <div className={styles.contenedorJuego}>
      <div style={{ textAlign: "center" }}>
        <p>
          Coloca en el círculo el número correspondiente a cada una de las
          situaciones:
        </p>
      </div>
      <div style={{ position: "relative", textAlign: "center" }}>
        <ImagenComponente {...configJuego.image} />
        {configJuego.options.map((option) => (
          <InputComponente
            key={option.id}
            top={option.circle.top}
            left={option.circle.left}
            text={option.text}
            color={option.color}
            onChange={(value) => cambioRespuesta(option.id, value)}
            
          />
        ))}
      </div>
      <div style={{ marginTop: "20px",maxWidth:"550px"}}>
        <OpcionesRespuesta options={configJuego.options} />
      </div>
      <div style={{ marginTop: "20px"}}>
        <button style={{ backgroundColor:"blue",padding:"1rem",borderRadius:"5px",border:"none"}} onClick={comprobarRespuesta}>Enviar</button>
      </div>
      {resultado && (
        <div style={{ marginTop: "20px" }}>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
};

export default Juego;

