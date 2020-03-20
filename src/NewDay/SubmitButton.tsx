import React from 'react';

interface Props {
    ClickFunction: any,
    value: string;
}


const SubmitButton = (Props: Props) =>{


    return (
        <button onClick={() => Props.ClickFunction}>{Props.value}</button>

    )
}

export default SubmitButton