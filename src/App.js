import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import AdminDash from './components/AdminDash';

function App() {
  
  return (
    <div className="App">
      <Navbar />
	  <AdminDash />
    </div>
  );
}

export default App;