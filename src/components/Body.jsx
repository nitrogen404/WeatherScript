import React from "react";
import Card from "./Card";

export default function Weatherinfo() {
    return <div className="middlebody">
        <div className="circle"></div>
        <Card city="Pune" country="IN" currtemp="25°C" weather="Rainy" minmax="25°/16°" />
    </div>
}