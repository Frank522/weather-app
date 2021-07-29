import React, { Component } from "react";

class Location extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="location">
        <h3>{this.props.value}</h3>
      </div>
    );
  }
}

export default Location;
