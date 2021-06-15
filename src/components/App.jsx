import React from "react";
import Particles from "react-particles-js";
import config from "../particleconfig";
import Weatherinfo from "./Body";
import * as Text from "./Text";

export default function App() {
    return <div className="container">
        <Particles className="particles" width='100vw' height="100vh" params={config} />
        <div className="text">
            <Text.hOne name="WeatherScript" />
            <Text.paraGraph content="Designed and Developed by Chandan & Aditya" />
        </div>
        <Weatherinfo />
    </div>
}