import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Tigerpool.css';
import Navbar from './pages/Navbar';
import LoginPanel from './pages/LoginPanel';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import StudentLogin from './pages/StudentLogin';
import AdminDash from './pages/AdminDash';
import TripDetails from './pages/TripDetails';
import RateDriver from './pages/RateDriver';
import ViewRequests from './pages/ViewRequests';
import Success from './pages/Success';
import { Animated } from "react-animated-css";
import PrivateRoute from './components/PrivateRoute';
import DriverDash from './pages/DriverDash';

class Tigerpool extends React.Component {

  render() {
    return (
      <Animated animationIn="fadeIn">
        <BrowserRouter>
          <Navbar />
          <div className="tigerpool-container">
            <Switch>
              <Route exact path="/login" component={LoginPanel} />
              <Route exact path="/adminlogin" component={AdminLogin} />
              <Route exact path="/studentlogin" component={StudentLogin} />
              <PrivateRoute roles={["rider", "driver"]} exact strict path="/">
                <Home />
              </PrivateRoute>
              <PrivateRoute roles={["rider", "driver"]} path="/trip">
                <TripDetails />
              </PrivateRoute>
              <PrivateRoute roles={["rider"]} path="/rate">
                <RateDriver />
              </PrivateRoute>
              <PrivateRoute roles={["admin"]} path="/admindash">
                <AdminDash />
              </PrivateRoute>
              <PrivateRoute roles={["driver", "rider"]} path="/driverdash">
                <DriverDash />
              </PrivateRoute>
              <PrivateRoute roles={["driver"]} path="/ride-requests-1">
                <ViewRequests />
              </PrivateRoute>
              <Route component={Page404} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Animated>
    )
  }

}

function Page404() {
  return (
    <div className='alert alert-danger' role='alert'>
      <p className='my-auto'>No page here - try
      <Link className='alert-link' to='/adminlogin'> /adminlogin </Link>or
      <Link className='alert-link' to='/'> /</Link>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className='page-footer bg-dark'>
      <div className="container text-center py-3 text-white">
        Created by Christopher Savan, Jake Rossi, Noah Britton, Jeremy De La Cruz, Meet Patel
      </div>
    </footer>
  )
}

export default Tigerpool;
