import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
         <h2 className="text-white">Company</h2>
         <ul className="list-unstyled">
          <li ><Link to='/'className="text-white" >Home</Link></li>
          <li><Link to='/aboutus'className="text-white" href="#">About Us</Link></li>
          <li><Link to='/viewevents'className="text-white" href="#">Events</Link></li>
          <li><Link to='/contactus' className="text-white" href="contactus.html">Contact</Link></li>
         </ul>
        </div>
        <div className="text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} AnyEvent
        </div>     
      </div>
    );
  }
}

export default Footer;
