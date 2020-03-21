import React, { useState, FormEvent, ChangeEvent } from 'react';
import './NewDayStyling.scss';
import { useHistory } from 'react-router-dom';
import SubmitButton from './SubmitButton';


export const NewDay = () => {

    let history = useHistory();

    const [thing1, updateThing1] = useState(''); 
    const [thing2, updateThing2] = useState('');
    const [thing3, updateThing3] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>, updateHandler: Function) =>{
        updateHandler(e.target.value);
     }


    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{


        let thing1ToSend = {daysOrder: 1, thing: thing1};
        let thing2ToSend = {daysOrder:2, thing: thing2};
        let thing3ToSend = {daysOrder:3, thing: thing3};

        const things = [thing1ToSend, thing2ToSend, thing3ToSend];

        const NewDay = {
            date: new Date(),
            things: things
        }

        fetch('http://localhost:8080/api/v1/days',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(NewDay)
        })


        let path = '/';
      
        history.push(path);
        
    } 
    



        return (   
            <form className="form-style" onSubmit={handleSubmit}>
                <label className="form-group input-label">
                    Thing 1
                    <input name="thing1"
                            type="text" 
                            className="form-control"
                            value={thing1}
                            onChange={(event) => handleChange(event, updateThing1)}></input>
                </label>
                 <label className="form-group input-label">
                    Thing 2
                    <input name="thing2"
                            type="text" 
                            className="form-control"
                            value={thing2}
                            onChange={(event) => handleChange(event,updateThing2)}></input>
                </label>
                <label className="form-group input-label">
                    Thing 3
                    <input name="thing3"
                            type="text" 
                            className="form-control"
                            value={thing3}
                            onChange={(event) =>handleChange(event, updateThing3)}></input>
                </label> 
            <SubmitButton ClickFunction={(event:FormEvent<HTMLFormElement>) => handleSubmit(event)} value="Submit"></SubmitButton>
            </form>

        );
    }




export default NewDay
