import React, { Component } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      college: "",
      gender: "",
      dateofBirth: "",
      password: "",
      password2: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange = (selected) => {
    this.setState({
      dateofBirth: selected,
    });
  };

  onChange(e) {
    // const value = e.target.type='pickdate'?date:e.target.value
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(this.state.dateofBirth));

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      college: this.state.college,
      gender: this.state.gender,
      dateofBirth: date,
      password: this.state.password,
      password2: this.state.password2,
    };

    console.log(newUser);
  }
  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your AnyEvent Account</p>
              <Form onSubmit={this.onSubmit}>
                <Row className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </Row>
                <Row className="form-group">
                  <Input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                  <small className="form-text text-muted">
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
                </Row>
                <Row className="form-group">
                  <Input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Institute/Organization Name"
                    name="college"
                    value={this.state.college}
                    onChange={this.onChange}
                  />
                </Row>
                <div>
                  <Row className="form-group">
                    <Col>
                      Gender
                      <Input
                        type="select"
                        className="col-8 form-control form-control-lg "
                        placeholder="Gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Input>
                    </Col>
                    <Col>
                      Date of Birth
                      <DatePicker
                        className="col-12 form-control form-control-lg"
                        placeholderText="Select Date"
                        selected={this.state.dateofBirth}
                        onChange={this.handleChange}
                        dateFormat="dd/MM/yyyy"
                        maxDate={new Date()}
                        isClearable
                        showYearDropdown
                        showMonthDropdown
                        scrollableMonthYearDropdown
                      />
                    </Col>
                  </Row>
                </div>
                <Row className="form-group">
                  <Input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                </Row>
                <Row className="form-group">
                  <Input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Confirmed Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                    required
                  />
                </Row>
                <Row className="form-group">
                  <Button
                    type="submit"
                    className="btn btn-info btn-block "
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
