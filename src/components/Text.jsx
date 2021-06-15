import React from "react";

export function hOne(props) {
    return <h1 className="appname">{props.name}</h1>
}

export function paraGraph(props) {
    return <p className="credits" >{props.content}</p>
}