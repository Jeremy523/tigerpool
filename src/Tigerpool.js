import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Tigerpool.css';
import Navbar from './pages/Navbar';
import LoginPanel from './pages/LoginPanel';
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin';
import AdminDash from './pages/AdminDash';
import TripDetails from './pages/TripDetails'
import RideSearch from './pages/RideSearch'
import RateDriver from './pages/RateDriver';
import Success from './pages/Success';
import { Animated } from "react-animated-css";

class Tigerpool extends React.Component {

  render() {
    return (
      <Animated animationIn="fadeIn">
        <BrowserRouter>
          <Navbar />
          <div className="tigerpool-container">            
            <Switch>
              <Route exact path="/adminlogin" component={AdminLogin} />
              <Route exact path="/admindash" component={AdminDash} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/search" component={RideSearch}/>

              <Route exact path="/login" component={LoginPanel} />
              <Route exact path="/trip" component={TripDetails} />
              <Route exact path="/rate" component={RateDriver} />
                {/* <Route path="/:success" component={Success}/>
              </Route> */}
              <Route exact path="/" component={Home}/>
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
