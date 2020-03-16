import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import NewDay from './NewDay';


interface Props {
}

interface State {

}




export class NewDayPage extends Component<Props, State> {


    /*
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
    */





    render(){
        console.log(this.state)
        return (
              <div>
                <NavBar></NavBar>
                <NewDay></NewDay>
              </div>
        );
    }

}

export default NewDayPage
/*
const RenderRow = (props: any) =>{

}
*/