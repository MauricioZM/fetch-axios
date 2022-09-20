import { useState, useEffect } from "react";
import axios from "axios";

export const Axios = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/ditto`)
      .then((res) => {
        setName(res.data.name);
      })
  }, []);

  return <div>{name}</div>;
};


