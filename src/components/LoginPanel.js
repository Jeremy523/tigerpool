import React from 'react';
import AdminLoginButton from './AdminLoginButton'
import StudentLoginButton from './StudentLoginButton'

class LoginPanel extends React.Component{
    render() {
        return(
        <div class="container">
            <img src="Car.png"></img>
            <div>
                <StudentLoginButton />
            </div>

            <div>
                <AdminLoginButton />
            </div>
    </div>
    )
}
}
export default LoginPanel; 