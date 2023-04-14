import React, { useState } from 'react'
import './css/Listado.css'
import './css/Botton.css'

function Listado() {


    const [personajes, setPersonajes] = useState();

    const handleClick = async () => {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      setPersonajes(data);
    };

    const handleEliminar = (nombre) => {
        const nuevosPersonajes = personajes.results.filter(person => person.name !== nombre);
        setPersonajes({
            ...personajes,
            results: nuevosPersonajes
        });
    }

  return (
    <div>
         <div>
            <h1 className='container'>Listado - Personajes</h1>
        </div>
      <button onClick={handleClick} className='boton'>Abir listado</button>
      {personajes && (
        <div>
          <ul className='centro'>
            {personajes.results.map((person) => (
              <li key={person.name}>
                {person.name}
                <button className='eliminar' onClick={() => handleEliminar(person.name)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Listado