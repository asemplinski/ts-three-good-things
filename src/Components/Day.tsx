import React from 'react';
import Thing from './Thing';


const Days = ({ Days } : {Days:any}) => {
    console.log("Days");
    console.log(Days)
    return (
        <div>
            {Days.map(((day:any) => {
                return(
                <div key={day.id}>
                    <h5>{day.date}</h5>
                    <Thing Things={day.things}></Thing>
                </div>
                )
            }))}
        </div>
    )
}

export default Days
