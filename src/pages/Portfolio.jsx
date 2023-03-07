import React, { useState, useEffect } from "react";
import axios from 'axios';

function Portfolio() {
    const [data, setData] = useState({ work: [] });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await axios('cv.json');
            console.log(result.data)
            setData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (

        <h1>Portfolio</h1>
    );
}

export default Portfolio;