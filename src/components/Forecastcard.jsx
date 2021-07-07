import React from "react";

export default function Forecastcard(props) {
    return <li className="singlecard">
        <div className="forecastcard">
            <h5>{props.date}</h5>
            <h4>{props.main}</h4>
            <h6>{props.tempmin}</h6>
            <h6>{props.tempmax}</h6>
            <img src={ `http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather" />
        </div>
    </li>
}