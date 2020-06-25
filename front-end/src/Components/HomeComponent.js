import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import '../App.css';

function RenderEvent({ event }) {
  return (
    <div  className="col-12 col-lg-5 m-1">
        <Card className="card" key={event.id}>
          <CardImg  src={event.image} alt={event.name} />
          <CardBody>
            <CardTitle className="h4">{event.name}</CardTitle>
            <CardSubtitle>{event.category}</CardSubtitle>
            <CardText>
                <p>{event.description}</p>
            </CardText>
          </CardBody>
        </Card>
    </div>
  );
}
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const event = this.props.events.map((event) => {
      return (
        <RenderEvent event={event}/>
      );
    });
    return (
      <div className="container">
       <div className="row">
            {event}
        </div>
      </div>
    );
  }
}

export default HomeComponent;
