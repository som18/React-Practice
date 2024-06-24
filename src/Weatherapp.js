import React, { useEffect, useState } from "react";

export default function Weatherapp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1b9105b0672bebfc1338985dfb2f6ecc`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  });
  return (
    <div>
      {weather ? (
        <div>
          <h2>Current weather</h2>
          <p>Temperature:{weather.main.temp}</p>
          <p>Condition : {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
