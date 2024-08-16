import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../functions/funciones';
import React, { useEffect, useState } from 'react';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);
  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
    console.log(personaje);
  }, [params.id]);

  return (
    <>
      <h2>Personaje con el id {params.id}</h2>
      {personaje ? (
        <p>con el nombre {personaje.name}</p>
      ) : (
        <p>Cargando información del personaje...</p>

      )}
      <img src={personaje.image} alt="" />
    </>
  );
};

export default Personaje;
