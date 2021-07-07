import React from "react";

export default function Card(props) {
    // const honeStyle = { fontSize: "72px", fontWeight: "600", marginTop: "70px" }
    // const hthreeStyle = { fontSize: "30px", fontWeight: "500" };
    // const hsixStyle = { marginLeft: "calc(100% - 70px)" }
    return <div className="weathercard">
        <h3>{props.city}, {props.country}</h3>
        <h3>At {new Date().toLocaleTimeString('en-GB', {
            hour12: true,
            hour: "numeric",
            minute: "numeric"
        })}</h3>
        <h1>{props.currtemp}</h1>
        <h5>{props.curweather}</h5>
        <h6>{props.minmax}</h6>
        <img src={ props.icon} alt="" />
    </div>
}