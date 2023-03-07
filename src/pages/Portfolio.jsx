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
    console.log("Hej från Portfolio")
    return (
        <>
            <h1>Portfolio</h1>
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data.work.map(item => (
                        <li>
                            <h4>{item.name}</h4>
                            <p>{item.role}</p>
                            <br></br>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Portfolio;