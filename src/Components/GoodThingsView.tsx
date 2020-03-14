import React, { Component } from 'react';
import Days from './Day';


interface Props {
}

interface State {
    days: [];
}




export class GoodThingsView extends Component<Props, State> {



    constructor(props: any){
        super(props)
        this.state = {
            days: []
        }
    }


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





    render(){
        console.log(this.state)
        return (
              <Days Days={this.state.days}></Days>
        );
    }

}


/*
const RenderRow = (props: any) =>{

}
*/
