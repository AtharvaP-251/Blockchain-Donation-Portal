import React from "react";
import Status from "./Status";
import logo from "./img/logo.png";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark is-fixed-top"
        style={{ backgroundColor: "#3298dc" }}
      >
        <div className="container-fluid">
          <a className="nav-item" href="/">
            <img src={logo} alt="logo" width="25px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/campaigns"
                >
                  Ongoing Campaigns
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/success"
                >
                  Successful Campaigns
                </a>
              </li>
              <li className="nav-item nav-link active text-center">
                <Status {...props} />
              </li>
            </ul>
            <form className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/add";
                }}
              >
                Create Campaign
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
