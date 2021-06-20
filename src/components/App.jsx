import React from "react";
import Particles from "react-particles-js";
import config from "../particleconfig";
import Weatherlist from "./Weatherlist";
import useFetch from "../hooks/useFetch";
import Searchcity from "./Searchcity";
import * as Text from "./Text";


export default function App() {
    const { apidata, setUrl } = useFetch();
    // console.log(apidata);
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
        
    </div>  
}

