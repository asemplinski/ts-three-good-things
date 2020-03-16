import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';




interface Props {
}

interface State {
}




export class NavBar extends Component<Props, State> {



    constructor(props: any){
        super(props)
        this.state = {
            days: []
        }
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




    render(){
        //console.log(this.state)
        return (
            <React.Fragment>
              <nav className="navbar navbar-dark bg-dark mb-3">
                  <a className="navbar-brand" href="">
                    <h1>OverView<span className="badge badge-secondary"></span></h1>
                  </a>
              </nav>
              </React.Fragment>

        );
    }

}



export default NavBar

