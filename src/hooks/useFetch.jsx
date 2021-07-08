import { useEffect, useState } from "react";
const fetch = require("node-fetch");

const useFetch = (initialURL) => {
    const [apidata, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [url, setUrl] = useState(initialURL);

    useEffect(() => {
        if (!url) return;
        setIsLoading(true);
        setData(null);
        setError(null);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setIsLoading(false);
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
    return { apidata, error, isLoading, setUrl };
}

export default useFetch;

