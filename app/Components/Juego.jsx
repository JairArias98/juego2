
import React, { useState, useEffect } from "react";
import ImagenComponente from "./ImagenComponente";
import InputComponente from "./InputComponente";
import OpcionesRespuesta from "./OpcionesRespuesta";
import styles from "./InputComponent.module.css";
import configJuego from "./ConfigJuego";

const Juego = () => {
  const [respuestas, setRespuestas] = useState(Array.from({ length: configJuego.preguntas.length }, () => ({})));
  const [resultado, setResultado] = useState(null);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);
  const [mostrarBotonEnviar, setMostrarBotonEnviar] = useState(false);

  useEffect(() => {
    // Reinicia las respuestas al cambiar de pregunta
    setRespuestas(Array.from({ length: configJuego.preguntas.length }, () => ({})));
    setResultado(null);
    setMostrarAdvertencia(false);
    setMostrarBotonEnviar(false);
  }, [preguntaActual, configJuego.preguntas]);

  const cambioRespuesta = (id, value) => {
    const respuestaNumero = value !== "" ? parseInt(value, 10) : undefined;
    setRespuestas((prevRespuestas) => {
      const nuevasRespuestas = [...prevRespuestas];
      nuevasRespuestas[preguntaActual] = { ...nuevasRespuestas[preguntaActual], [id]: respuestaNumero };

      // Verifica si se ha llegado a la última pregunta y todas las respuestas están llenas
      const esUltimaPregunta = configJuego.preguntas.length - 1 === preguntaActual;
      const todasLasRespuestasLlenas = configJuego.preguntas[
        preguntaActual
      ].options.every(
        (option) =>
          nuevasRespuestas[preguntaActual][option.id] !== undefined && nuevasRespuestas[preguntaActual][option.id] !== ""
      );

      // Actualiza el estado para mostrar/ocultar el botón de enviar
      setMostrarBotonEnviar(esUltimaPregunta && todasLasRespuestasLlenas);

      return nuevasRespuestas;
    });
  };

  const comprobarRespuesta = () => {
    const respuestasCorrecta =
      configJuego.preguntas[preguntaActual].options.every((option) => {
        const respuesta = respuestas[preguntaActual][option.id];
        const esCorrecta =
          respuesta !== undefined &&
          respuesta ===
            configJuego.preguntas[preguntaActual].respuestaCorrecta[option.id];

        return esCorrecta;
      });

    // Establece el resultado
    setResultado(respuestasCorrecta ? "Aprobado" : "No Aprobado");
  };

  const siguientePregunta = () => {
    // Verifica que todas las respuestas estén llenas
    const todasLasRespuestasLlenas = configJuego.preguntas[
      preguntaActual
    ].options.every(
      (option) =>
        respuestas[preguntaActual][option.id] !== undefined && respuestas[preguntaActual][option.id] !== ""
    );

    if (todasLasRespuestasLlenas) {
      // Avanza a la siguiente pregunta
      setPreguntaActual((prevPregunta) => prevPregunta + 1);
      setRespuestas((prevRespuestas) => [...prevRespuestas, {}]); // Agrega un nuevo objeto para la siguiente pregunta
      setMostrarAdvertencia(false); // Reinicia la advertencia al avanzar
      setMostrarBotonEnviar(false); // Oculta el botón de enviar al avanzar
    } else {
      // Muestra la advertencia si no todas las respuestas están llenas
      setMostrarAdvertencia(true);
    }
  };

  const esUltimaPregunta = configJuego.preguntas.length - 1 === preguntaActual;

  return (
    <div className={styles.contenedorJuego}>
      <div  className="text-center">
        <p>
          Coloca en el círculo el número correspondiente a cada una de las
          situaciones:
        </p>
      </div>
     
      <div className={styles.posicionImg} >
        <ImagenComponente
          {...configJuego.preguntas[preguntaActual].image}
        />
        {configJuego.preguntas[preguntaActual].options.map((option) => (
          <InputComponente
            key={option.id}
            top={option.circle.top}
            left={option.circle.left}
            text={option.text}
            color={option.color}
            onChange={(id, value) => cambioRespuesta(id, value)}
            id={option.id}
            respuesta={respuestas[preguntaActual][option.id]}
          />
        ))}
      </div>
      <div className={styles.opionesRespuesta} >
        <OpcionesRespuesta
          options={configJuego.preguntas[preguntaActual].options}
        />
      </div>
      {mostrarAdvertencia && (
        <div className={styles.mensajeAdvertencia}>
          Por favor, llene todos los círculos antes de pasar a la siguiente
          pregunta.
        </div>
      )}
      {esUltimaPregunta && !resultado && mostrarBotonEnviar && (
        <div className={styles.contButton}>
          <button
          className={styles.buttonEnviar}
            onClick={comprobarRespuesta}
          >
            Enviar
          </button>
        </div>
      )}
      {resultado && (
        <div className={`${styles.containerResultado} ${resultado === "Aprobado"  ? styles.aprobado : ""} `}>
          {resultado}
        </div>
      )}
      {!resultado && !esUltimaPregunta && (
        <div className={styles.sigPregunta} style={{ marginTop: "20px" }}>
          <button 
          className={styles.buttonSiguiente}
            onClick={siguientePregunta}
          >
            Siguiente Pregunta
          </button>
        </div>
      )}
    </div>
  );
}

export default Juego;
