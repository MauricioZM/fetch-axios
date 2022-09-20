import React from "react";
export default class FetchClass extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto/ ")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ pokemon: res });
      });
  }

  render() {
    return <p>{this.state.pokemon.name}</p>;
  }
}
