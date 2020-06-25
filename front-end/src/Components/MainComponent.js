import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent'
import EVENTS from '../shared/events'
import {BrowserRouter as Router,Route} from 'react-router-dom';

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
                    <HomeComponent events={this.state.events}/>
                <Footer/>
                </Router>
            </div>
        )
    }
}

export default MainComponent;