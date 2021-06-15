require('dotenv').config();

export default function getWeatherData(city) {
    const fetch = require('node-fetch');

    const weatherAPI =
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    fetch(weatherAPI)
        .then((res) => {
            res.json().then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
        })
    // console.log(weatherInfo);
}
