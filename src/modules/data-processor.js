const DataProcessor = (() => {
  let cleanData = {
    temp: {
      temp: "20°F",
      feels: "20°F",
      max: "21°F",
      min: "20°F",
    },
    humidity: "12%",
    pressure: {
      sea: "?",
      ground: "?",
    },
    rain: {
      one: "1mm",
      three: "2mm",
    },
    snow: {
      one: "1mm",
      three: "2mm",
    },
    clouds: "34%",
    wind: {
      speed: "6mph",
      deg: "20",
      gust: "6mph",
    },
    location: "London",
  };

  let dirtyData = {};

  const getData = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Sioux Falls&APPID=8ec226f0628c371ef233a098c1bfc274&units=imperial"
    );
    dirtyData = await response.json();
    console.log(dirtyData);
  };

  const processData = () => {
    cleanData.temp = {
      temp: dirtyData.main.temp + "°F",
      feels: dirtyData.main.feels_like + "°F",
      max: dirtyData.main.temp_max + "°F",
      min: dirtyData.main.temp_min + "°F",
    };

    cleanData.humidity = dirtyData.main.humidity + "%";

    cleanData.pressure = dirtyData.main.pressure + "hPa";

    cleanData.clouds = dirtyData.clouds.all + "%";

    cleanData.wind = {
      speed: dirtyData.wind.speed + "mph",
      deg: dirtyData.wind.deg + "°",
      gust: dirtyData.wind.gust + "mph",
    };

    if(dirtyData.rain){
      cleanData.rain = {
        one: dirtyData.rain,
        three: dirtyData.rain
      }
    } else {
      cleanData.rain = ''
    }

    if(dirtyData.snow){
      cleanData.snow = {
        one: dirtyData.snow,
        three: dirtyData.snow,
      }
    } else {
      cleanData.snow = ''
    }
  };

  return { getData };
})();

export default DataProcessor;
