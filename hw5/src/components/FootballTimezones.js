// FootballTimezones.js
import React, { useState, useEffect } from "react";
import styles from "./FootballTimezones.module.css";

const FootballTimezones = ({ apiKey }) => {
    const [timezones, setTimezones] = useState([]);
    const [filteredTimezones, setFilteredTimezones] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const cachedTimezones = localStorage.getItem("football_timezones");
        if (cachedTimezones) {
            const parsedData = JSON.parse(cachedTimezones);
            setTimezones(parsedData);
            setFilteredTimezones(parsedData);
        }
    }, []);

    const fetchTimezones = async () => {
        const url = "https://api-football-v1.p.rapidapi.com/v3/timezone";
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            setTimezones(result.response);
            setFilteredTimezones(result.response);

            localStorage.setItem("football_timezones", JSON.stringify(result.response));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        setFilteredTimezones(
            timezones.filter((tz) => tz.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery, timezones]);

    return (
        <div className={styles.container}>
            <h1>Football Timezones</h1>
            <input
                type="text"
                placeholder="Search timezones..."
                className={styles.searchBar}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={fetchTimezones} className={styles.button}>
                Get Timezones
            </button>
            <div className={styles.results}>
                {filteredTimezones.length === 0 ? (
                    <p>No timezones found.</p>
                ) : (
                    <ul className={styles.list}>
                        {filteredTimezones.map((timezone, index) => (
                            <li key={index} className={styles.listItem}>{timezone}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FootballTimezones;
