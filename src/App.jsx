import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import searchIcon from "../src/assets/searchIcon.svg";
import weatherQuotes from './weatherQuotes.js';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    name: "",
    temperature: 0,
    humidity: "",
    weather_icons: "",
    weather_descriptions: "",
    wind_speed: 0,
  });
  const [showData, setShowData] = useState(false);
  const [randomQuote, setRandomQuote] = useState({});

    const getRandomQuote = () => {
      // console.log("check");
      const randomIndex = Math.floor(Math.random() * weatherQuotes.length);
      setRandomQuote(weatherQuotes[randomIndex]);
    };
    
    useEffect(()=>{
      if(city==""){
        getRandomQuote();
      }
    },[])
    useEffect(() => {
      const getGeolocationCityName = async () => {
        try {
          // Get user's geolocation coordinates
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            // Fetch city name based on geolocation coordinates using reverse geocoding
            const response = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=166ab4233db5802fde57d87f62b9ea6e`);
            const cityName = response.data[0].name;
            // Fetch weather data based on geolocation city name
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=166ab4233db5802fde57d87f62b9ea6e`);
            setData({
              name: weatherResponse.data.name,
              temperature: weatherResponse.data.main.temp,
              humidity: weatherResponse.data.main.humidity,
              weather_icons: weatherResponse.data.weather[0].icon,
              weather_descriptions: weatherResponse.data.weather[0].description,
              wind_speed: weatherResponse.data.wind.speed,
            });
            setShowData(true);
          });
        } catch (error) {
          console.error("Error fetching weather data:", error);
          setShowData(false);
          getRandomQuote();
        }
      };
  
      // Call function to get geolocation city name and weather data initially
      getGeolocationCityName();
    }, []);
  const checkWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=166ab4233db5802fde57d87f62b9ea6e`
      );

      setData({
        name: response.data.name,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        weather_icons: response.data.weather[0].icon,
        weather_descriptions: response.data.weather[0].description,
        wind_speed: response.data.wind.speed,
      });
      setShowData(true);
    } catch (error) {
      alert("No city found!");
      console.error("Error fetching weather data:", error);
      setCity("");
      setShowData(false);
    }
  };
  return (
    <>
      <div className="container">
      <div className="card">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn" onClick={checkWeather}>
            <img src={searchIcon} alt="" />
          </button>
        </div>
        {showData ? (
          <div className="weather-details">
            <h2 className="city">{`Weather in ${data.name}`}</h2>
            <h1 className="temp">{data.temperature} °C</h1>
            <div className="flex">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather_icons}.png`}
                alt=""
                className="icon"
              />
              <div className="description">{data.weather_descriptions}</div>
            </div>
            <div className="humidity">Humidity: {data.humidity} %</div>
            <div className="wind">Wind Speed: {data.wind_speed} km/h</div>
          </div>
        ) : (
          <div className="quote-container">
            <p className="quote">{randomQuote?.quote}</p>
            <p className="author">-{randomQuote?.author}</p>
          </div>
        )}  
      </div>
      </div>
      
    </>
  );
}

export default App;
