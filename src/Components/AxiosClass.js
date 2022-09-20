import axios from "axios";
import React from "react";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
export default class AxiosClass extends React.Component {

  state ={
    data: []
  }

  peticionGet = () => {
    axios.get(url)
    .then((res)=>{
      this.setState({data: res.data.name});
    })
  };
  componentDidMount() {

    this.peticionGet();
  }
  
  render() {
    return <p>{this.state.data}</p>;
  }
}
