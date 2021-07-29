import React, { Component } from "react";

class Humidity extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="humidity">
        <h4>Humidity</h4>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Humidity;
