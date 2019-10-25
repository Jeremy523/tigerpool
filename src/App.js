import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UpcomingTrips from './components/UpcomingTrips'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <UpcomingTrips />
    </div>
  );
}

export default App;
