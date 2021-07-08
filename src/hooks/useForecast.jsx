import React from "react";
const fetch = require("node-fetch");

const useForecast = (initialURL) => {
    const [forecastData, setData] = React.useState(null);
    const [err, setError] = React.useState(null);
    
    const [url, setURL] = React.useState(initialURL);

    React.useEffect(() => {
        if (!url) return;
        
        setData(null);
        setError(null);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                
                if (data.cod >= 400) {
                    setError(data.message)
                    return;
                }
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);
    return { forecastData, err, setURL };

}

export default useForecast;
