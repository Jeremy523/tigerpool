import React from 'react';
import logo from '../logo.png'

class Navbar extends React.Component {
  
  render() {
    return (
      <nav class="navbar shadow sticky-top navbar-expand-lg navbar-light bg-white">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mx-auto" href="/home">
          Tigerpool
        </a>
        <div class="collapse navbar-collapse" id="navbar-toggler">
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
            <li class="nav-item">
              <a class="nav-link" exact strict href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/listings">Listings</a>
            </li>
            <li class="nav-item">
              <a class="nav-link hidden" href="/notifications">Notifications</a>
            </li>
            <li class="nav-item">
              <a class="nav-link hidden" href="/dashboard">Driver Dash</a>
            </li>
          </ul>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="/notifications">Notifications</a>
              </li>
              <li class="nav-item">
                <a href="/dashboard" class="btn btn-dark driver-dash-link">
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