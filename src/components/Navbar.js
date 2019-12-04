import React from 'react';
import { Link } from 'react-router-dom';

import auth from '../utils/auth';

class Navbar extends React.Component {

  dashboardOrRegisterLink = _ => {
    let isDriver = auth.isLoggedInAs(["driver"]);
    return isDriver
      ? (<Link className="nav-link hidden" to="/driverdash">Dashboard</Link>)
      : (<Link className="nav-link hidden" to="/register">Register</Link>);
  };

  dashboardOrRegisterBtn = _ => {
    let isDriver = auth.isLoggedInAs(["driver"]);
    return isDriver
      ? (<Link to="/driverdash" className="btn btn-dark driver-dash-link">Dashboard</Link>)
      : (<Link to="/register" className="btn btn-dark driver-dash-link">Register</Link>);
  };

  update = _ => this.forceUpdate();

  render() {
    return (
      <nav className="navbar shadow sticky-top navbar-expand-lg navbar-light bg-white">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand mx-auto" to="/">
          Tigerpool
        </Link>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listings">Listings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hidden" to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              {this.dashboardOrRegisterLink()}
            </li>
          </ul>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" id="notification" to="/notifications"><i class="material-icons">notifications</i></Link>
              </li>
              <li className="nav-item">
                {this.dashboardOrRegisterBtn()}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;