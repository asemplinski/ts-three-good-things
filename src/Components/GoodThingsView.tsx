import React, { useState, useEffect } from 'react';
import Days from './Day';



export const GoodThingsView = () => {

    const [days, setDays]  = useState();

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/days")
        .then(response => response.json())
        .then(data => {
            setDays(data);
        })
        .catch(console.log)
    }, [])

    return (
            <Days Days={days}></Days>
    );
}

export default GoodThingsView;


