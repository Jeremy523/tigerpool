import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './Tigerpool.css';
import Navbar from './components/Navbar';
import LoginPanel from './components/LoginPanel';
import Home from './components/Home'
import AdminLogin from './components/AdminLogin';
import AdminDash from './components/AdminDash';
import ScaleLoader from 'react-spinners/ScaleLoader';


class Tigerpool extends React.Component {
  constructor() {
    super()
    
    this.state = {
      isLoading: true
    }
    
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    },2500)
  }

  render() {
    
    const { Provider, Consumer } = React.createContext()
    const { isLoading } = this.state
    
    return (
      <div className="tigerpool-container">
        {isLoading ? (
          <div className="loading">
            <ScaleLoader 
              sizeUnit={"px"}
              width={25}
              height={150}
              radius={15}
              margin={'3px'}
            />
            <h3>Loading...</h3>
          </div>
        ) : (
          <BrowserRouter>
            <Navbar />
            <div>            
            <Switch>
              <Route exact path="/adminlogin" component={AdminLogin} />
              <Route exact path="/admindash" component={AdminDash} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={LoginPanel}/>
              <Route exact path="/" component={LoginPanel}/>
              <Route component={Page404} />
            </Switch>
            </div>            
            <Footer />
          </BrowserRouter>
        )}
      </div>
    );
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
