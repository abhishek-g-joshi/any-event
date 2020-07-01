import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent'
import EVENTS from '../shared/events';
import Register from './auth/Register';
import Login from './auth/Login';


class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            events:EVENTS
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Header/>  
                    <Route exact path="/any-event/" component={()=> <HomeComponent events={this.state.events}/>}/>           
                    {/* <HomeComponent events={this.state.events}/> */}
                    <div className="container">
                        <Route exact path='/register' component={Register}/>
                        <Route exact path='/login' component={Login}/>
                    </div>  
                    <Footer/>
                </Router>
            </div>
        )
    }
}

export default MainComponent;