import React, { Component } from "react";

class Clouds extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="clouds">
        <h4>Clouds</h4>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Clouds;
