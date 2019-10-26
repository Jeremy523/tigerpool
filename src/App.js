import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <LoginPanel />
      
    </div>
  );
}

export default App;
