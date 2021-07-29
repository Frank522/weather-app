import React, { Component } from "react";

class Pressure extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pressure">
        <h4>Pressure</h4>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Pressure;
