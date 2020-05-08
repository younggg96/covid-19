import { useState, useEffect } from "react"

const BaseURL = 'https://corona.lmao.ninja/v2'
const axios = require('axios');
export function useApi(path, initData = null) {
    const [data, setDate] = useState(initData);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(BaseURL + `${path}`);
            setDate(response.data);
        }
        getData();
    }, [path])
    return data;
}