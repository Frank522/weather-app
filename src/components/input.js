import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input type="text" className="cityInput" list="suggestions" placeholder="City"></input>
      </div>
    );
  }
}

export default Input;
