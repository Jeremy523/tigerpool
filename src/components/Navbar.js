import React from 'react';

class Navbar extends React.Component {
  
  render() {
    return (
      <nav className="navbar shadow sticky-top navbar-expand-lg navbar-light bg-white">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mx-auto" href="/home">
          Tigerpool
        </a>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <a className="nav-link" exact href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/listings">Listings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hidden" href="/notifications">Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hidden" href="/dashboard">Driver Dash</a>
            </li>
          </ul>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/notifications">Notifications</a>
              </li>
              <li className="nav-item">
                <a href="/dashboard" className="btn btn-dark driver-dash-link">
                  Driver Dash
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;