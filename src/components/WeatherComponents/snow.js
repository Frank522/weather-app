import React, { Component } from "react";

class Snow extends Component {
  render() {
    let snow = this.props.snow ? (
      <div className="rain">
        <h4>Snow</h4>
        <p>
          <strong>Last Hour: </strong>
          {this.props.snow.one}
        </p>
        <p>
          <strong>Last 3 Hours: </strong>
          {this.props.snow.three}
        </p>
      </div>
    ) : (
      ""
    );
    return snow;
  }
}

export default Snow;