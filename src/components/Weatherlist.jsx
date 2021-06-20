import React from "react";
import Card from "./Card";

const Weatherlist = ({ weathers }) => {
    console.log(weathers);
    const { weather } = weathers;
    const { sys } = weathers;
    const { country } = sys
    const { name } = weathers;
    
    const [{ main: currentState}] = weather;
    const { main } = weathers;
    const {
        
        feels_like: currentTemp,
        temp_min,
        temp_max,
        
    } = main;

    return <div>
        <Card city={name} country={country} currtemp={currentTemp + "°C"} curweather={currentState} minmax={temp_min + "°C" + "/" + temp_max + "°C"} />
    </div>
}

export default Weatherlist;
