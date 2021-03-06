import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <>
        <Navbar dark className="navbar" expand="md">
          <div className="container">
            <Link to="/any-event/">
              <NavbarBrand>AnyEvent</NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/any-event/login">
                    <button type="button" class="btn btn-outline-warning">
                      Log In
                    </button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/any-event/register">
                    <button type="button" class="btn btn-outline-warning">
                      Sign Up
                    </button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
