import React, { useState } from 'react';
import './NewDayStyling.scss';
import { useHistory } from 'react-router-dom';
import SubmitButton from './SubmitButton';


/*
handleChange(e: React.FormEvent<HTMLInputElement>){
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    this.setState({

        [name]: value
    })
    console.log(this.state);

*/
/*
const updateThing1 = (e: any, thing1:any) =>{
   console.log(e);
   thing1 = e.target.value;
    const target = e.currentTarget;
    const value = target.value;
    const name = target.name;

    this.setState({

        [name]: value
    })
    console.log(this.state);

}
*/

export const NewDay = () => {

    let history = useHistory();

    const [thing1, updateThing1] = useState(''); 

    const [thing2, updateThing2] = useState('');
    
    const [thing3, updateThing3] = useState('');

    const handleChange = (e: any, updateHandler: any) =>{
        //console.log(e);
        updateHandler(e.target.value);

         /*const target = e.currentTarget;
         const value = target.value;
         const name = target.name;
     
         this.setState({
     
             [name]: value
         })
         console.log(this.state);*/
     
     }

    /*
    constructor(props: any){
        super(props)

        this.state = {
            thing1: '',
            thing2: '',
            thing3: ''
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    */

    /*
    componentDidMount(){
        fetch("http://localhost:8080/api/v1/days")
        .then(response => response.json())
        .then(data => {
            this.setState({days: data});
            //console.log(data);
            //console.log(this.state)
        })
        .catch(console.log)

        //console.log(this.state)
    }
    */


   

    const handleSubmit = (event:any) =>{
        console.log(event)
        event.preventDefault();
        /*
        const thing1 = {
            daysOrder: 1,
            thing: this.state.thing1
        }
        const thing2 = {
            daysOrder: 2,
            thing: this.state.thing2
        }

        const thing3 = {
            daysOrder: 3,
            thing: this.state.thing3
        }

        const things = [thing1, thing2, thing3]

        const NewDay = {
            date: new Date(),
            things: things
        }
        

        */
        /*
        fetch('http://localhost:8080/api/v1/days',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(NewDay)
        }) */
        console.log(thing1);
        console.log(thing2);
        console.log(thing3);

        
        let path = '/';
      
        history.push(path);
        



        console.log(JSON.stringify(NewDay));
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
            <SubmitButton ClickFunction={(event:any) => handleSubmit(event)} value="Submit"></SubmitButton>
            </form>

        );
    }




export default NewDay

/*
const RenderRow = (props: any) =>{

}
*/