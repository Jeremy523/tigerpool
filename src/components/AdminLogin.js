import React from 'react';

class AdminLogin extends React.Component {
  constructor() {
    super()
    
    this.state = {
      email: "",
      password: ""
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit Clicked")
    
  }

  handleChange(e) {
    e.preventDefault()
    console.log(e.target)
    this.setState({
       [e.target.name] : e.target.value,
    });
    //console.log(this.state.email + " : " + this.state.password)
  }
  
  
  render() {

    const testEmail = "admin@tigerpool.com"
    const testPassword = "admin123"
    let actualEmail = this.state.email
    let actualPassword = this.state.password

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