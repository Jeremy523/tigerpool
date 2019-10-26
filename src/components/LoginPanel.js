import React from 'react';


class LoginPanel extends React.Component{
    render() {
        return(
        <div class="login-container">
            <img className="login-element" src={"car.png"} width="10%"></img>

            
            <div className="">
                <a href="/login" className="btn btn-dark btn-lg login-element">
                        Student Login
                </a>            
            </div>
            <div className="login-element">
                <a href="/login" className="btn btn-dark btn-sm">
                        Admin Login
                </a>
            </div>            
        </div>
    )
}
}
export default LoginPanel; 