import React, { Component } from "react";

class Rain extends Component {
  render() {
    let rain = this.props.rain ? (
      <div className="rain">
        <h4>Rain</h4>
        <p>
          <strong>Last Hour: </strong>
          {this.props.rain.one}
        </p>
        <p>
          <strong>Last 3 Hours: </strong>
          {this.props.rain.three}
        </p>
      </div>
    ) : (
      ""
    );
    return rain;
  }
}

export default Rain;
