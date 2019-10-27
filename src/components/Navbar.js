import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar shadow sticky-top navbar-expand-lg navbar-light bg-white">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand mx-auto" to="/home">
          Tigerpool
        </Link>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listings">Listings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hidden" to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hidden" to="/dashboard">Driver Dash</Link>
            </li>
          </ul>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/notifications">Notifications</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="btn btn-dark driver-dash-link">
                  Driver Dash
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;