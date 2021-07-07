import React from "react";
import Particles from "react-particles-js";
import config from "../particleconfig";
import Weatherlist from "./Weatherlist";
import useFetch from "../hooks/useFetch";
import useForecast from "../hooks/useForecast";
import Searchcity from "./Searchcity";
import * as Text from "./Text";
import Forecast from "./Forecast" 

export default function App() {
    const { apidata, setUrl } = useFetch();
    const { forecastData, setURL } = useForecast();
    
    return <div className="container">
        <Particles className="particles" width='100vw' height="100vh" params={config} />
        <div className="text">
            <Text.Hone name="WeatherScript" />
            <Text.Paragraph content="Designed and Developed by Chandan & Aditya" />
        </div>
        <div>
            <Searchcity onSearch={(city) => setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)} />
            
            {apidata && <Weatherlist weathers={apidata} />}
            
        </div>
        <div className="forecastbtn">
            <Searchcity onSearch={(city) => setURL(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=4&units=metric&appid=${process.env.REACT_APP_API_KEY}`)} />
            {forecastData && <Forecast forecastdata={forecastData.list} />}
        </div>
    </div>  
}
