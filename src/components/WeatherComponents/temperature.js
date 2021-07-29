import React, { Component } from "react";

class Temperature extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="temperature">
        <h4>Temperature</h4>
        <ul>
          <li>
            <strong>Current: </strong>
            {this.props.current}
          </li>
          <li>
            <strong>Feels Like: </strong>
            {this.props.feelsLike}
          </li>
          <li>
            <strong>High: </strong>
            {this.props.high}
          </li>
          <li>
            <strong>Low: </strong>
            {this.props.low}
          </li>
        </ul>
      </div>
    );
  }
}

export default Temperature;
