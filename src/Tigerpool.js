import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Tigerpool.css';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';
import Home from './components/Home'
import AdminLogin from './components/AdminLogin';
import AdminDash from './components/AdminDash';

class Tigerpool extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="tigerpool-container">            
            <Switch>
              <Route exact path="/adminlogin" component={AdminLogin} />
              <Route exact path="/admindash" component={AdminDash} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={LoginPanel}/>
              <Route exact path="/" component={LoginPanel}/>
              <Route component={Page404} />
            </Switch>
          <Footer />
          </div>            
        </BrowserRouter>
      </div>
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
