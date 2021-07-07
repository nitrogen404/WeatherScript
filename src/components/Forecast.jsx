import React from "react";
import Forecastcard from "./Forecastcard";

export default function Forecast({ forecastdata }) {
    console.log("Forecast Data: ", forecastdata);
    for (let obj of forecastdata) {
        var { dt } = obj;
        let date = new Date(dt);
        obj.dt = date.toLocaleDateString();
    }
    console.log(forecastdata);
    return <div className="main">
        <ul className="cards">
            {forecastdata.map(({ dt, main, weather }) => (
                <Forecastcard key={dt} date={dt * 1000} tempmin={main.temp_min + '°C'} tempmax={main.temp_max + '°C'} main={weather[0].main} icon={ weather[0].icon}/>
                ))}
        </ul>
    </div>
}


