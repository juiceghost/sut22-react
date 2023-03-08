import React, { useState, useEffect } from "react";
import axios from 'axios';


import ListList from '../components/ListList';

function Portfolio() {
    const [data, setData] = useState({ work: [] });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            // https://api.github.com/users/juiceghost/repos
            const result = await axios('cv.json');
            console.log(result.data)
            setData(result.data);
            setIsLoading(false);
        };

        fetchData();
    }, []);
    console.log("Hej från Portfolio")

    const myName = "Krille";
    return (
        <>
            <h1>Portfolio</h1>
            {/* <ListItem name={myName} role="Slacker" /> */}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ListList data={data} />

            )}
        </>
    );
}

export default Portfolio;