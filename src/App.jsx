import { useState } from "react";

function App() {
  //Hooks
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const handleInputChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });

  };

  const handleResetClick = () =>{
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });

  }
  
  return (
    <div className="App container">
      <div className="row">
        <div className="col"> <h3>LISTA</h3></div>
        <div className="col">
      <h3>NOTAS</h3>
      <br></br>
      <label className="mb-2">Título</label>
      <br></br>
      <input 
        id = "titulo" 
        name = "titulo" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.titulo}
      />
      <br></br>
      <label className="mb-2">Fecha</label>
      <br></br>
      <input 
        id = "fecha" 
        name = "fecha" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.fecha}
      />
      <br></br>
      <label className="mb-2">Nota</label>
      <br></br>
      <input 
        id = "nota" 
        name = "nota" 
        type = "text" 
        onChange = {handleInputChange}
        value = {inputState.nota}
      />

      <br></br>
      </div>
      </div>
      <hr></hr>
      <div className="mb-2">
      <button 
      class="btn btn-success" 
        type="button" style={{marginLeft:"10PX", marginTop:"10px"}}
        onClick={handleResetClick}>
        Reinicio
      </button>
      </div>

    </div>
  );
}

export default App;
