import React, { Component } from "react";
import "../App.css";
import donation from "./img/donation.png";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <section id="home" className="hero is-medium">
          <div className="hero-head" id="homepage">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <h1 className="title is-title is-size-1 has-text-weight-bold">
                    Welcome to Fundly
                  </h1>

                  <p className="subtitle is-4 has-margin-top-20 is-family-primary">
                    Donate to charities with confidence using{" "}
                    <strong>SECURE</strong> and <strong>TRANSPARENT</strong>{" "}
                    blockchain technologies
                  </p>
                  <a href="/campaigns" className="has-text-centered">
                    <button className="button is-link">Donate Now</button>
                  </a>
                </div>
                <div className="column is-half">
                  <img src={donation} alt="donation" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
