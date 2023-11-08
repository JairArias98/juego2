
const configJuego = {
    image: {
      src: "/images/juego - copia.jpg",
      width: 500,
      height: 300,
      alt: "Game Image",
      
    },
    options: [
      { id: 1, circle: { top: "3%", left: "56%" },color:"blue", text: "No desconectes los aparatos eléctricos halando del cable." },
      { id: 2, circle: { top: "64.5%", left: "58.5%" },color:"purple", text: "No debes jugar con cables que esten conectados a la toma electrica." },
      { id: 3, circle: { top: "24%", left: "70%" }, color: "green", text: "Si un tomacorriente se encuentra en mal estado, cómpreselo a un adulto." },
      { id: 4, circle: {top:"11%",left:"79%" },color:"#A8631F", text: "No insertes objetos extraños en el tomacorriente." },
      { id: 5, circle: { top: "21%", left: "43%" },color:"red", text: "No conectes en un mismo tomacorriente varios aparatos, esto puede generar recalentamiento y un cortocircuito" },
      { id: 6, circle: { top: "50.5%", left: "4.2%" },color:"green", text: "Si ves cables que esten desprotegidos, avisale a un adulto " },
      { id: 7, circle: {  top: "18%", left: "37%"  },color:"orange", text: "No desconectes los aparatos electricos tirando del cable" },
      
    ],
  };

  const respuestasCorrectas = {
    1: 1, 
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
  };
  
  
  export  {configJuego,respuestasCorrectas};
  