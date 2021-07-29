import React, { Component } from "react";
import Clouds from "./WeatherComponents/clouds";
import Humidity from "./WeatherComponents/humidity";
import Location from "./WeatherComponents/location";
import Pressure from "./WeatherComponents/pressure";
import Rain from "./WeatherComponents/rain";
import Temperature from "./WeatherComponents/temperature";
import Wind from "./WeatherComponents/wind";

class Display extends Component {
 

  constructor(props) {
    super();
    this.state = {
      temp: {
        temp: "20°F",
        feels: "20°F",
        max: "20°F",
        min:"20°F",
      },
      humidity: "12%",
      pressure: {
        sea: "?",
        ground: "?",
      },
      rain: {
        rain1h: "1mm",
        rain3h: "2mm",
        snow1h: "1mm",
        snow3h: "2mm",
      },
      clouds: "34%",
      wind: {
        speed: "6mph",
        deg: "20",
        gust: "6mph"
      }

    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="display">
        <Location />
        <div className="weatherItems">
          <div className="leftWeatherItems">
            <Temperature
              current={this.state.temp.temp}
              feelsLike={this.state.temp.feels}
              max={this.state.temp.max}
              min={this.state.temp.min}
            />
            <Humidity />
            <Pressure />
          </div>
          <div className="rightWeatherItems">
            <Rain />
            <Clouds />
            <Wind />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
