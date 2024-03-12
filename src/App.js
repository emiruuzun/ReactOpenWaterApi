import "./App.css";
import React, { useState } from "react";
import { openWater } from "./services/openWater.js";
import Günesli from './assets/günesli.mp4'
import Yagmur from './assets/production_id_5197762 (1080p).mp4'
// import Video from "./assets/production_id_5197762 (1080p).mp4";
// import MapExample from "./components/MapExample.jsx";

function App() {
  const [apiData, setApiDat] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [weaterData, setWeaterData] = useState("")

  // const [mapData, setMapData] = useState([51.505, -0.09]);
  // const [mapKey, setMapKey] = useState(0)

  const handlerClick = async () => {
    const data = await openWater(cityName);
    console.log(data);
    updateWeatherVideo(data)
    // console.log(weatherData);
    // setMapData([data.coord.lat, data.coord.lon]);
    // setMapKey((prevKey)=> prevKey + 1)
    setApiDat(data);
  };

  const handlerChange = (e) => {
    setCityName(e.target.value);
  };

  const updateWeatherVideo = (videData) =>{
    if(videData.weather[0].main === "Rain"){
      setWeaterData(Yagmur)
    }
    if(videData.weather[0].main === "Clear"){
      setWeaterData(Günesli)
    }

  }


  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={weaterData} type="video/mp4"></source>
      </video>
      <div className="top">
        <h1>Hava Durumu</h1>
        <input
          type="text"
          value={cityName}
          onChange={handlerChange}
          placeholder="Şehir giriniz"
        ></input>
      </div>
      {apiData && (
        <div className="content">
          <div className="city">
            {apiData.name} , {apiData.sys.country}
          </div>
          <div className="temp">{Math.round(apiData.main.temp)}°C</div>
          <div className="desc">{apiData.weather[0].description}</div>
          <div className="minMax">
            {Math.round(apiData.main.temp_min)}°C /{" "}
            {Math.round(apiData.main.temp_max)}°C
          </div>
        </div>
      )}
      <button className="getir" onClick={handlerClick}>
        Hava Durumu Getir
      </button>
      {/* <div className="mapContainer">
        <MapExample  position = {mapData} key={mapKey}/>
      </div> */}
    </div>
  );
}

export default App;
