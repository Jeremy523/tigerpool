import React from 'react';

class AdminLogin extends React.Component {
  constructor() {
    super()
    
    this.state = {
      email: "",
      password: ""
    }

    this.testEmail = "admin@tigerpool.com"
    this.testPassword = "admin123"
    this.emailValidator = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}'


  }



 handleSubmit(e) {
    e.preventDefault();
    if (RegExp(this.emailValidator).test(this.state.email)){
        // log when a good email that is not the test email is entered
        console.log("Submit Clicked but Invalid")
        if (this.state.email === this.testEmail && this.state.password === this.testPassword){
            // log when a good email that is the test email is entered
            console.log("VALID EMAIL")
        }
    }
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
       [e.target.name] : e.target.value,
    });
  }
  
  
  render() {

    return (
      <div className="upcoming_trips_component">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Admin Login</h1>
        </div>
        <form class="w-50 m-3 mx-auto" onSubmit={this.handleSubmit.bind(this)}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input name="password" value={this.state.password} onChange={this.handleChange.bind(this)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default AdminLogin;