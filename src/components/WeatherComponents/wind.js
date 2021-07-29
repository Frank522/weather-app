import React, { Component } from "react";

class Wind extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wind">
        <h4>Wind</h4>
        <p>
          <strong>Speed: </strong>
          {this.props.speed}
        </p>
        <p>
          <strong>Direction: </strong>
          {this.props.deg}
        </p>
      </div>
    );
  }
}

export default Wind;
