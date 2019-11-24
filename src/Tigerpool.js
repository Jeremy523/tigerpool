import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Tigerpool.css';
import Navbar from './components/Navbar';
import LoginPanel from './pages/LoginPanel';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import StudentLogin from './pages/StudentLogin';
import AdminDash from './pages/AdminDash';
import TripDetails from './pages/TripDetails'
import RideSearch from './pages/RideSearch'
import RateDriver from './pages/RateDriver';
import ViewRequests from './pages/ViewRequests';
import RideSuccess from './pages/RideSuccess';
import { Animated } from "react-animated-css";
import PrivateRoute from './components/PrivateRoute';
import RegisterDriver from './pages/RegisterDriver';
import DriverApplicationLarry from './pages/DriverApplicationLarry';
import DriverApplicationBob from './pages/DriverApplicationBob';
import DriverDash from './pages/DriverDash';
import DriverConfirmSuccess from './pages/DriverConfirmSuccess.js';
import RegisterSuccess from './pages/RegisterSuccess';
import RestrictedGoHome from './pages/RestrictedGoHome';
import Restricted404 from './pages/Restricted404';
import SearchResults from './pages/SearchResults';

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
              <Route exact path="/restricted" component={RestrictedGoHome} />
              <PrivateRoute roles={["rider", "driver"]} exact strict path="/search">
                <RideSearch />
              </PrivateRoute>
              <PrivateRoute roles={["rider", "driver"]} exact strict path="/listings">
                <SearchResults />
              </PrivateRoute>
              <PrivateRoute roles={["rider", "driver"]} redirect="/login" exact strict path="/">
                <Home />
              </PrivateRoute>
              <PrivateRoute roles={["rider"]} path="/register">
                <RegisterDriver />
              </PrivateRoute>
              <PrivateRoute roles={["rider", "driver"]} path="/trip">
                <TripDetails />
              </PrivateRoute>
              <PrivateRoute roles={["rider"]} path="/rate">
                <RateDriver />
              </PrivateRoute>
              <PrivateRoute roles={["rider"]} path="/ridesuccess">
                <RideSuccess />
              </PrivateRoute>
              <PrivateRoute roles={["rider"]} path="/registersuccess">
                <RegisterSuccess />
              </PrivateRoute>
              <PrivateRoute roles={["admin"]} path="/admindash">
                <AdminDash />
              </PrivateRoute>
              <PrivateRoute roles={["driver"]} path="/driverdash">
                <DriverDash />
              </PrivateRoute>
              <PrivateRoute roles={["driver"]} path="/ride-requests-1">
                <ViewRequests />
              </PrivateRoute>
              <PrivateRoute roles={["admin"]} path="/larry-app">
                <DriverApplicationLarry />
              </PrivateRoute>
              <PrivateRoute roles={["admin"]} path="/bob-app">
                <DriverApplicationBob />
              </PrivateRoute>
			        <PrivateRoute roles={["admin"]} path="/driver-confirm-success">
                <DriverConfirmSuccess />
              </PrivateRoute>
              <PrivateRoute roles={["driver"]} redirect="/register" path="/create">
                <Restricted404 />
              </PrivateRoute>
              <Route component={Restricted404} />
            </Switch>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </Animated>
    )
  }

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
