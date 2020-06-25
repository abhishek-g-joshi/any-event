import React, { Component } from 'react';
import {Nav,Navbar, NavbarBrand, Collapse, NavItem, NavLink, NavbarToggler} from 'reactstrap';
 import '../App.css';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false,
        }
        this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
        // this.handleLogin= this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    render() {
        return (
            <>
                <Navbar dark className='navbar'expand='md'>
                    <div className="container">
                    <NavbarBrand to="/">AnyEvent</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/login'>
                                    <button type="button" class="btn btn-outline-warning">Log In</button>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/singup'>
                                    <button type="button" class="btn btn-outline-warning">Sign Up</button>
                                </NavLink>
                            </NavItem>
                        </Nav>  
                    </Collapse>
                    </div>
                </Navbar>
            </>
        )
    }
}

export default Header;

