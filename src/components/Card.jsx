import React from "react";

export default function Card(props) {
    const honeStyle = { fontSize: "72px", fontWeight: "600", marginTop: "70px" }
    const hthreeStyle = { fontSize: "30px", fontWeight: "500" };
    const hsixStyle = { marginLeft: "calc(100% - 70px)" }
    return <div className="weathercard">
        <h3 style={hthreeStyle}>{props.city}, {props.country}</h3>
        <h3 style={hthreeStyle}>At {new Date().toLocaleTimeString('en-GB', {
            hour12: true,
            hour: "numeric",
            minute: "numeric"
        })}</h3>
        <h1 style={honeStyle}>{props.currtemp}</h1>
        <h6>{props.weather}</h6>
        <h6 style={hsixStyle}>{props.minmax}</h6>
    </div>
}