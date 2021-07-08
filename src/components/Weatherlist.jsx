import React from "react";
import Card from "./Card";

const Weatherlist = ({ weathers }) => {
    console.log(weathers);
    const { weather } = weathers;
    const { sys } = weathers;
    const { country } = sys
    const { name } = weathers;
    
    const [{ main: currentState, icon}] = weather;
    const { main } = weathers;
    const {
        
        temp: currentTemp,
        temp_min,
        temp_max,
        
    } = main;

    return <div>
        <div className="circle"></div>
        <Card city={name} country={country} currtemp={Math.round(currentTemp) + "°C"} curweather={currentState} minmax={temp_min + "°C" + "/" + temp_max + "°C"} icon={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    </div>
}

export default Weatherlist;
