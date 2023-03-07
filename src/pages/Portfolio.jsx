import React, { useState, useEffect } from "react";
import axios from 'axios';

function Portfolio() {
    const [data, setData] = useState({ repos: [] });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const result = await axios('https://api.github.com/users/juiceghost/repos');
            console.log(result.data)
            setData({ repos: result.data });
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
                    {data.repos.map(item => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            <p>{item.html_url}</p>
                            <br></br>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Portfolio;