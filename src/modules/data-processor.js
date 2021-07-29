const DataProcessor = (() => {
  const process = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=New York&APPID=8ec226f0628c371ef233a098c1bfc274"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  return { process };
})();

export default DataProcessor;
