import React from "react";


export default function Searchcity({ onSearch }) {
    const [city, setCity] = React.useState("");

    return <div className="inputdiv">
        <input className="inputbar" type="text" placeholder="Search your city" onChange={e => setCity(e.target.value)} value={city} />

        <button className="submitbtn" onClick={() => onSearch(city)}>Check weather</button>
    </div>
}
