import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';
import UpcomingTrips from './components/UpcomingTrips'
import AdminLogin from './components/AdminLogin';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route exact path="/upcoming" component={UpcomingTrips} />
            <Route component={Page404} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

function Page404() {
  return (
    <div>No page here - try /adminlogin or /upcoming</div>
  );
}

export default App;
