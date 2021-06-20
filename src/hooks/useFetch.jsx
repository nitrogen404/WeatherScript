import { useEffect, useState } from "react";
const fetch = require("node-fetch");

const useFetch = (initialURL) => {
    const [apidata, setData] = useState(null);
    const [url, setUrl] = useState(initialURL);

    useEffect(() => {
        
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [url]);
    return { apidata, setUrl };
}

export default useFetch;

