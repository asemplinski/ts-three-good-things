import React from 'react';
import Thing from './Thing';
import './DayStyling.scss'

interface dayInterface {
    id?: number,
    date?: Date,
    things?: object[]

}


const Days = ({ Days } : {Days: object[] | undefined}) => {


    const receivedDays = Days || [];
    return (
        <div className="DayCard">
            {receivedDays.map(((day:dayInterface) => {
                console.log(typeof(day))
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
