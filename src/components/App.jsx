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
    const { apidata, error, setUrl } = useFetch();
    const { forecastData, err, setURL } = useForecast();
    const handleapierr = () => {
        if (error) return <center><h2 style={{marginLeft: "390px", marginTop: "180px", position: "absolute"}}>Error when fetching {error}</h2></center>
        if (!apidata) return null;
        return <Weatherlist weathers={apidata} />
    }
    const handleforeerr = () => {
        if (err) return <center><h2 style={{marginTop: "180px", position: "absolute"}}>Error when fetching {err}</h2></center>
        
        if (!forecastData) return null;
        return <Forecast forecastdata={forecastData.list} />
    }

    return <div className="container">
        <Particles className="particles" width='100vw' height="100vh" params={config} />
        <div className="text">
            <Text.Hone name="WeatherScript" />
            <Text.Paragraph content="Designed and Developed by Chandan & Aditya" />
        </div>
        <div>
            <Searchcity onSearch={(city) => setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)} />
            {handleapierr()}
        </div>
        <div className="forecastbtn">
            <h1>Get Forecast</h1>
            <Searchcity onSearch={(city) => setURL(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=4&units=metric&appid=${process.env.REACT_APP_API_KEY}`)}/>
            {handleforeerr()}
        </div>
    </div>  
}
