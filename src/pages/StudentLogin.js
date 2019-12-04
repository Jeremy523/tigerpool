import React from 'react';
import { Redirect } from 'react-router-dom'

import auth from '../utils/auth';

class StudentLogin extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      isLoggedInRider: false,
      isLoggedInDriver: false
    };

    this.testRider = {
      email: "rider@rit.edu",
      password: "rider123"
    };

    this.testDriver = {
      email: "driver@rit.edu",
      password: "driver123"
    };

    this.emailValidator = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}';
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (RegExp(this.emailValidator).test(email)) {
      if (this.matchesRider(email, password)) {
        this.setState({
          isLoggedInRider: true
        });
      }
      else if (this.matchesDriver(email, password)) {
        this.setState({
          isLoggedInDriver: true
        });
      }
      else {
        alert("Submit clicked, but email is invalid")
      }
    }
  }

  matchesRider(email, password) {
    return email === this.testRider.email && password === this.testRider.password;
  }

  matchesDriver(email, password) {
    return email === this.testDriver.email && password === this.testDriver.password;
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { isLoggedInDriver, isLoggedInRider } = this.state;
    if (isLoggedInDriver || isLoggedInRider) {
      if (isLoggedInDriver)
        auth.loginAsDriver();
      else if (isLoggedInRider)
        auth.loginAsRider();
      this.props.updateFunc && this.props.updateFunc();
      return <Redirect to="/" />
    }

    return (
      <div className="upcoming_trips_component">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Student Login</h1>
        </div>
        <form className="w-50 m-3 mx-auto" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email address</label>
            <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input name="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
    )
  }
}

export default StudentLogin;