import {useEffect, useState} from 'react';

export const Fetch =  () => {
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') // hacemos la petición get
    .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
    .then(res => setName(res.name)); // cuando hayamos terminado (then) actualizamos el estado nombre
  }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
  return <p>{name}</p>;
}

