import React, { Component } from 'react';

import GoodThingsView from './Components/GoodThingsView';
import NewDay from './NewDay/NewDay';
import { Route, NavLink, BrowserRouter as Router} from 'react-router-dom';


interface Props {
}

interface State {

}




export class Home extends Component<Props, State> {


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
                <Router>
                    <nav className="navbar navbar-dark bg-dark mb-3">
                        <NavLink className="navbar-brand" to="/">
                            <h3>OverView</h3>
                        </NavLink>
                        <NavLink className="navbar-brand" to="/NewDay">
                            <h3>New Day</h3>
                        </NavLink>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={GoodThingsView}/>
                        <Route path="/NewDay" component={NewDay}/>
                    </div>
                </Router>
              </div>
        );
    }

}


export default Home


/*
const RenderRow = (props: any) =>{

}
*/
