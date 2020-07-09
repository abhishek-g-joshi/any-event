import React, { Component } from "react";

import "../App.css";

class HomeComponent extends Component {
  render() {
    return (
      <>
        <div className="landing">
          <div className="dark-overlay landing-inner">
            <div className="col-md-12 text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 className="display-2 mb-6 font-weight-bold">AnyEvent</h1>
              <h4 className="font-italic font-weight-bold">
                Our passion is your perfect event. Publish or Participate.{" "}
              </h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeComponent;
