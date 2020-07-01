import React, { Component } from 'react';
import {
    Card,
    CardDeck,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Breadcrumb,BreadcrumbItem
  } from "reactstrap";
  import {Link} from 'react-router-dom';
  import "../App.css";

  function RenderEvent({ event }) {
    return (
        // <div className="ant-col events-section__col ant-col-xs-24 ant-col-md-12 ant-col-lg-8">
        <div className="col-12 col-md-4">
          <Card className="card" key={event.id}>
            <CardImg  src={event.image} height="200" width="150" alt={event.name} />
            <CardBody>
              <br/>
              <CardTitle className="cardtitle h3">{event.name}</CardTitle>
              <br/>
              <CardSubtitle className="cardsubtitle">{event.category}</CardSubtitle>
              <br/>
              <CardText className="cardtext">{event.description}</CardText>
            </CardBody>
            <CardFooter>
                <small className="text-muted">
                Event Start in 2 days.
                </small>
            </CardFooter>
          </Card>
          </div>
        //   </div>
    );
  }

class EventComponent extends Component {
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
          <>
         <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/any-event/'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Events</BreadcrumbItem>
            </Breadcrumb>
            <div className="row">{event}</div>
         </div>
         </>
        )
    }
}

export default EventComponent;