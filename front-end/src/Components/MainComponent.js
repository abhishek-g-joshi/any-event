import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent'
import EVENTS from '../shared/events'

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
                <Header/>
                <div className="container">
                    <HomeComponent events={this.state.events}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MainComponent;