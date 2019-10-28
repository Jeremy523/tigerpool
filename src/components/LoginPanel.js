import React from 'react';
import { Link } from 'react-router-dom';

class LoginPanel extends React.Component {
    render() {
        return (
            <div class="login-container">
                <div className="spacer" />

                <img className="login-element" src={"car.png"} height="10%"></img>


                <div className="login-element">
                    <Link to="/home" className="btn btn-dark btn-primary btn-lg btn-block login-element">
                        Student Login
                </Link>
                </div>
                <div className="login-element">
                    <Link to="/adminlogin" className="btn btn-dark btn-sm">
                        Admin Login
                </Link>
                </div>
            </div>
        )
    }
}
export default LoginPanel; 