import React from "react";
import Forecastcard from "./Forecastcard";

export default function Forecast({ forecastdata }) {
    let i = 1;
    console.log(forecastdata);
    function setDate(counter) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        dd = today.getDate() + counter;
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }
    
    return <div className="main">
        <ul className="cards">
            {forecastdata.map(({dt, main, weather }) => (
                
                <Forecastcard key={dt} date={setDate(i++)} tempmin={main.temp_min + '°C'} tempmax={main.temp_max + '°C'} main={weather[0].main} icon={ weather[0].icon}/>
                ))}
        </ul>
    </div>
}


