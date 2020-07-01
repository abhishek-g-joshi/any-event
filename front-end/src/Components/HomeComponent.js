import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import '../App.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function RenderEvent({ event }) {
  return (
     <div className="col-lg m-1">
        <Card className="card" key={event.id}>
          <CardImg  src={event.image} height="250" width="200" alt={event.name} />
          <CardBody>
            <CardTitle className="h4">{event.name}</CardTitle>
            <CardSubtitle>{event.category}</CardSubtitle>
            <button type="button" class="btn btn-outline-info">More Info</button>
          </CardBody>
        </Card>
    </div>
  );
}
class HomeComponent extends Component {
  render() {
    return (
      <>
      <div className="landing">
      <div className="dark-overlay landing-inner">
       <div className="col-md-12 text-center">
          <br/><br/><br/><br/><br/><br/><br/>
          <h1 className="display-2 mb-12 font-weight-bold">AnyEvent</h1>
          <h4 className="font-italic font-weight-bold">Our passion is your perfect event. Publish or Participate. </h4>
        </div>
      </div>
      </div>
      {/* <div className="container"> 
      <h1 className="ui-kit__heading-primary">
        <span>Featured Events</span>
          <Link className="ui-kit__sub-heading" to="/any-event/all-events" >VIEW ALL</Link>
      </h1>  
      <hr/>
        <div className="row">
          {event}
        </div>
      </div> */}
      </>
    );
  }
}

export default HomeComponent;
