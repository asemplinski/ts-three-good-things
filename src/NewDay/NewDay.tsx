import React, { Component } from 'react';
import './NewDayStyling.scss';
import { useHistory } from 'react-router-dom';
import SubmitButton from './SubmitButton';


interface Props {
}

interface State {
    thing1?: string;
    thing2?: string;
    thing3?: string;

}




export class NewDay extends Component<Props, State> {


    
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


    handleChange(e: React.FormEvent<HTMLInputElement>){
        const target = e.currentTarget;
        const value = target.value;
        const name = target.name;

        this.setState({

            [name]: value
        })
        console.log(this.state);

    }

    handleSubmit(event:any){
   
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
        
        fetch('http://localhost:8080/api/v1/days',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(NewDay)
        })

        let path = '/';
        let history = useHistory();
        history.push(path);



        console.log(JSON.stringify(NewDay));
    }




    render(){
        return (   
            <form className="form-style" onSubmit={this.handleSubmit}>
                <label className="form-group input-label">
                    Thing 1
                    <input name="thing1"
                            type="text" 
                            className="form-control"
                            value={this.state.thing1}
                            onChange={this.handleChange}></input>
                </label>
                <label className="form-group input-label">
                    Thing 2
                    <input name="thing2"
                            type="text" 
                            className="form-control"
                            value={this.state.thing2}
                            onChange={this.handleChange}></input>
                </label>
                <label className="form-group input-label">
                    Thing 3
                    <input name="thing3"
                            type="text" 
                            className="form-control"
                            value={this.state.thing3}
                            onChange={this.handleChange}></input>
                </label>
                <SubmitButton ClickFunction={() => this.handleSubmit} value="Submit"></SubmitButton>
            </form>

        );
    }

}


export default NewDay

/*
const RenderRow = (props: any) =>{

}
*/