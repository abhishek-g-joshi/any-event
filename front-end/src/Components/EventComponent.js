import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

function RenderEvent({ event }) {
  return (
    <div className="col-12 col-md-4">
      <Card className="card" key={event.id}>
        <CardImg src={event.image} height="200" width="150" alt={event.name} />
        <CardBody>
          <br />
          <CardTitle className="cardtitle h3">{event.name}</CardTitle>
          <br />
          <CardSubtitle className="cardsubtitle">{event.category}</CardSubtitle>
          <br />
          <CardText className="cardtext">{event.description}</CardText>
        </CardBody>
        <CardFooter>
          <small className="text-muted">Event Start in 2 days.</small>
        </CardFooter>
      </Card>
    </div>
  );
}

class EventComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const event = this.props.events.map((event) => {
      return <RenderEvent event={event} />;
    });
    return (
      <>
        <div className="container">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/any-event/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Events</BreadcrumbItem>
          </Breadcrumb>
          <div className="event-list">
            <h2 className="dark">LIVE EVENTS</h2>
            <div className="section-line">
              <span></span>
            </div>
          </div>
          <br />
          <div className="row">{event}</div>
          <div className="event-list">
            <h2 className="dark">UPCOMING EVENTS</h2>
            <div className="section-line">
              <span></span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EventComponent;
