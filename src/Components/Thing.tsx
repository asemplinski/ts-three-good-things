import React from 'react';
import './thing-styling.scss';

const Thing = ({ Things } : {Things:any}) => {
    return (
        <div>
            {Things.map(((Thing:any) => {
                return(
                <div key={Thing.id} className="thing-one-line">
                    <h5>{Thing.daysOrder}.</h5>
                    <h5>{Thing.thing}</h5>
                </div>
                )
            }))}
        </div>
    )
}

export default Thing