import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Label,
  Col,
  Form,
  Input,
} from "reactstrap";
import "../../App.css";
import Events from '../EventComponent';
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
     e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);
    

  }
  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">Login</h1>
              <p className="lead text-center">Login to your AnyEvent Account</p>
              <Form onSubmit={this.onSubmit}>
                <Row className="form-group">
                  <Input
                    type="email"
                    className="form-conntrol form-control-lg"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                </Row>
                <Row className="form-group">
                  <Input
                    type="password"
                    className="form-conntrol form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </Row>
                <Link to="/any-event/all-events">
                <Row className="form-group">
                 
                    <button
                      type="submit"
                      className="btn btn-info btn-block"
                      color="primary"
                    >
                    Log In
                    </button>
                 
                </Row>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
