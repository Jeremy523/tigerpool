import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Tigerpool.css';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';
import Home from './components/Home'
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import AdminDash from './components/AdminDash';
import TripDetails from './components/TripDetails';
import RateDriver from './components/RateDriver';
import Success from './components/Success';
import { Animated } from "react-animated-css";
import PrivateRoute from './components/PrivateRoute';

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
              <PrivateRoute roles={["rider", "driver"]} path="/trip">
                <TripDetails />
              </PrivateRoute>
              <PrivateRoute roles={["rider"]} path="/rate">
                <RateDriver />
              </PrivateRoute>
              <PrivateRoute roles={["admin"]} path="/admindash">
                <AdminDash />
              </PrivateRoute>
              <PrivateRoute roles={["rider", "driver"]} path="/">
                <Home />
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
      <Link className='alert-link' to='/home'> /home</Link>
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
