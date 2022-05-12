import { useState } from "react";

function App() {
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",
  });

  const initialState = JSON.parse(localStorage.getItem("notas")) ||[];
  const [notas,setNotas] = useState(initialState);

  const handleInputChange = (event) => {
    // setInputState({
    //   titulo: event.target.value,
    //   fecha: "",
    //   nota: "",
    // });
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetChange = () => {
    setInputState({
      ...inputState,
      titulo: "",
      fecha: "",
      nota: "",
    });
  };




  const handleClickGuardar = () => {
    setNotas([...notas, inputState]);
    localStorage.setItem("notas", JSON.stringify(notas));
    handleResetChange();
  };
  
  const handleBorrarNota = (index) => {
    const nuevoArreglo = [];

    notas.forEach ((nota, i) => {
      if ( index !== i ){

         nuevoArreglo.push(nota)
      }
     
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    setNotas([...nuevoArreglo]);
  };

  const handleClickLimpiarlista = () => {
    setNotas([]);
    localStorage.setItem("notas", JSON.stringify([]));
  }

  return (
    <div className="App container">
      <div className="row bg-light p-3 rounded m-3">
        <div className="col p-4">
          <h3 className="text-center">Lista</h3>
          {
            notas.length === 0 &&
            "Al momento no tienes notas guardadas.  Puedes crear una en el formulario" 
             }
            {
              notas.length !== 0 && ( 
              
                  <ol> 
                  {notas.map((item, index) => {
                return(
                  <li key={index}>
                    {item.titulo} <br></br> ({item.fecha}) <br></br>
                  {item.nota} &nbsp;&nbsp;&nbsp;&nbsp;
                  <i
                  className="bi-x-circle-fill"
                  onClick={() => handleBorrarNota(index)}
                  style={{color: "red", 
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
                  ></i>

                  
                  
                  </li>
                  )
                })}
                  </ol>
              )


              }
              <br></br>
              <br></br>
              <hr></hr>
          <button
        
        onClick={handleClickLimpiarlista}
        className="btn btn-outline-primary"
        type="button"
        disabled ={notas.length === 0}
      >
        
         limpia listas
        </button>
              
            
          
        </div>
        
        <div className="col mx-auto bg-light p-4">
          <h3 className="text-center">Notas</h3>
          <label style={{ width: "100%" }} htmlFor="titulo">
            Input de Titulo
            <input
              className="m-2"
              type="text"
              id="titulo"
              name="titulo"
              onChange={handleInputChange}
              value={inputState.titulo}
              style={{ width: "100%" }}
            />
          </label>

          <br />
          <label style={{ width: "100%" }} htmlFor="fecha">
            Input de Fecha
            <input
              className="m-2"
              type="date"
              id="fecha"
              name="fecha"
              onChange={handleInputChange}
              value={inputState.fecha}
              style={{ width: "100%" }}
            />
          </label>

          <br />
          <label style={{ width: "100%" }} htmlFor="nota">
            Input de Nota
            <textarea
              className="m-2"
              id="nota"
              name="nota"
              onChange={handleInputChange}
              value={inputState.nota}
              style={{ width: "100%" }}
            />
          </label>
          <hr />
          <div className="ms-2 me-2 mt-2 row">
            <div className="col">
            <div className="row mx-1">
              
              <button
                onClick={handleResetChange}
                className="btn btn-outline-dark"
                type="button"
                disabled={
                  inputState.titulo ==="" ||
                  inputState.fecha ==="" ||
                  inputState.nota ===""
              }
              >
                Limpiar
              </button>
            </div>
            </div>
            <div className="col">
            <div className="row mx-1">
              <button
                onClick={handleClickGuardar}
                className="btn btn-outline-primary"
                type="button"
                disabled={
                  inputState.titulo ==="" ||
                  inputState.fecha ==="" ||
                  inputState.nota ===""
              }
              >
                Guardar
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
     </div>
  );
  }

export default App;
