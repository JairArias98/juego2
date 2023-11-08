

 const  OpcionesRespuesta=({options})=>{
    return (
        <ul>
          {options.map((option) => (
            <li key={option.id}>{option.id} ) {option.text}</li>
          ))}
        </ul>
      );
}


export default OpcionesRespuesta