import React, { Component } from "react";
import Clouds from "./WeatherComponents/clouds";
import Humidity from "./WeatherComponents/humidity";
import Location from "./WeatherComponents/location";
import Pressure from "./WeatherComponents/pressure";
import Rain from "./WeatherComponents/rain";
import Snow from "./WeatherComponents/snow";
import Temperature from "./WeatherComponents/temperature";
import Wind from "./WeatherComponents/wind";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      temp: {
        temp: "20°F",
        feels: "20°F",
        max: "21°F",
        min: "20°F",
      },
      humidity: "12%",
      pressure: "1008hPa",
      rain: {
        one: "2mm",
        three: "6mm",
      },
      snow: {
        one: "5mm",
        three: "6mm",
      },
      clouds: "34%",
      wind: {
        speed: "6mph",
        deg: "20",
        gust: "6mph",
      },
      location: "London",
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="display">
        <Location value={this.state.location} />
        <div className="weatherItems">
          <div className="leftWeatherItems">
            <Temperature
              current={this.state.temp.temp}
              feelsLike={this.state.temp.feels}
              high={this.state.temp.max}
              low={this.state.temp.min}
            />
            <Humidity value={this.state.humidity} />
            <Pressure value={this.state.pressure} />
          </div>
          <div className="rightWeatherItems">
            <Rain rain={this.state.rain} />
            <Snow snow={this.state.snow} />
            <Clouds value={this.state.clouds} />
            <Wind
              speed={this.state.wind.speed}
              deg={this.state.wind.deg}
              gust={this.state.wind.gust}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
