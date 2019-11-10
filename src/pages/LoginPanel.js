import React from 'react';
import { Link } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { Animated } from 'react-animated-css';

class LoginPanel extends React.Component {
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
        }, 1000)
    }

    render() {

        const { isLoading } = this.state

        return (
            <Animated animationIn="fadeIn">
                {isLoading ? (
                    <div className="loading">
                        <ScaleLoader
                            sizeUnit={"px"}
                            width={25}
                            height={150}
                            radius={15}
                            margin={'3px'}
                            color={'#E97305'}
                        />
                        <h3>Loading Tigerpool...</h3>
                    </div>
                ) : (
                        <div class="login-container">
                            <div className="m-5" />

                            <img className="p-5" src={"car.png"}></img>


                            <div className="login-element">
                                <Link to="/studentlogin" className="btn btn-dark btn-lg login-element px-4">
                                    RIT Student Login
                            </Link>
                            </div>
                            <div className="login-element">
                                <Link to="/adminlogin" className="btn btn-dark btn-md">
                                    Admin Login
                            </Link>
                            </div>
                        </div>
                    )}
            </Animated>
        )
    }
}
export default LoginPanel; 