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
      rain1h: "1mm",
      rain3h: "2mm",
      snow1h: "1mm",
      snow3h: "2mm",
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

  const process = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=New Yrk&APPID=8ec226f0628c371ef233a098c1bfc274"
    );
    dirtyData = await response.json();
  };

  const getNewState = () => {
      
  };

  return { process };
})();

export default DataProcessor;
