import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import EVENTS from "../shared/events";
import Register from "./auth/Register";
import Login from "./auth/Login";
import EventComponent from "./EventComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: EVENTS,
    };
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/any-event/" component={HomeComponent} />
          <div className="container">
            <Route exact path="/any-event/register" component={Register} />
            <Route exact path="/any-event/login" component={Login} />
            {/* <Route exact path='/any-event/all-events' component={()=> <EventComponent events={this.state.events}/>}/>  */}
          </div>
          <Route
            exact
            path="/any-event/all-events"
            component={() => <EventComponent events={this.state.events} />}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default MainComponent;
