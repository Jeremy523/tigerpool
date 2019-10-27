import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';
import UpcomingTrips from './components/UpcomingTrips'
import AdminLogin from './components/AdminLogin';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      
      <AdminLogin />
    </div>
  );
}

export default App;
