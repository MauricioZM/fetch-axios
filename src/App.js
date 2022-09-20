import React from "react";
import  {Axios}  from "./Components/Axios";
import AxiosClass from "./Components/AxiosClass";
import FetchClass from "./Components/FetchClass";
import {Fetch} from "./Components/Fetch";
class App extends React.Component {
  render() {
    return (
      <div>
        <Axios/>
        <AxiosClass/>
        <Fetch/>
        <FetchClass />

      </div>
    );
  }
}

export default App;
