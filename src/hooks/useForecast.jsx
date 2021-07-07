import React from "react";
const fetch = require("node-fetch");

const useForecast = (initialURL) => {
    const [forecastData, setData] = React.useState(null);
    const [url, setURL] = React.useState(initialURL);

    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);
    return { forecastData, setURL };

}

export default useForecast;
