import React, { Component } from "react";
import Display from "./components/display";
import Input from "./components/input";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Input/>
          <Display/>
      </div>
    );
  }
}

export default App;
