import React from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

class RideSearch extends React.Component {
    state = {
        startDate: "1-1-1111",
        startTime: "12:00",
        startLocation: "Rochester Institute of Technology",
        endLocation: "Destination"
    };
    handleDateChange = date => {
        this.setState({
            startDate: date
        })
    }
    handleTimeChange = time => {
        this.setState({
            startTime: time
        })
    }
    handleStartChange = loc => {
        this.setState({
            startLocation: loc
        })
    }
    handleEndChange = loc => {
        this.setState({
            endLocation: loc
        })
    }
    render() {
        return (
            <div className="loginContainer">
                <div className="jumbotron text-center">
                    <h1 className="display-4">
                        Find Trip
                    </h1>
                </div>
                <div className="search text-center">
                    <div className="search-items">
                        <div>
                            <div class="input-group mb-3 input-group-lg">
                                <input type="date" class="form-control" required onChange={e => this.handleDateChange(e.currentTarget.value)} aria-describedby="basic-addon1" />
                                <div class="input-group-append">
                                    <span class="input-group-text" >
                                        📅
                                 </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="input-group mb-3 input-group-lg">
                                <input type="location" class="form-control" required onChange={e => this.handleStartChange(e.currentTarget.value)} value={this.state.startLocation} aria-describedby="basic-addon1" />
                                <div class="input-group-append">
                                    <span class="input-group-text">
                                        🗺️
                                 </span>
                                </div>
                            </div>
                        </div>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39237.99028693614!2d-77.67252117661!3d43.07809800287481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d14c603a147e55%3A0xbe7eb31ed5e22c03!2sRochester%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1573345631275!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></Iframe>
                    </div>
                    <div className="search-items">
                        <div className="search">
                            <div>
                                <div class="input-group mb-3 input-group-lg">
                                    <input type="time" class="form-control" required value={this.state.startTime} onChange={e => this.handleTimeChange(e.currentTarget.value)} aria-describedby="basic-addon1" />
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon1">
                                            🕒
                                </span>
                                    </div>
                                </div>

                                <div>
                                    <div class="input-group mb-3 input-group-lg">
                                        <input type="location" class="form-control" required value={this.state.endLocation} onChange={e => this.handleEndChange(e.currentTarget.value)} aria-describedby="basic-addon1" />
                                        <div class="input-group-append">
                                            <span class="input-group-text" >
                                                🗺️
                                 </span>
                                        </div>
                                    </div>
                                </div>

                                <Iframe src="https://www.google.com/maps/embed?" width="600" height="450" frameborder="0" style="border:0;" ></Iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/listings" className="mt-4 mb-4 btn btn-dark btn-lg login-element px-4">
                        Find Trip
                    </Link>
                </div>
            </div>
        )
    }
}
export default RideSearch;