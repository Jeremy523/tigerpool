import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

class RideSearch extends React.Component {
    state = {
        startDate: new Date()
    };
    handleChange = date =>{
        this.setState({
            startDate: date
        })
    }

    render() {
        return (
            <div className="loginContainer">
                <div className="search text-center">
                    <div>
                    <DatePicker
                        selected={this.startDate}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>b</div>
                </div>
                <div className="search text-center">
                    <div className="search-items">
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39237.99028693614!2d-77.67252117661!3d43.07809800287481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d14c603a147e55%3A0xbe7eb31ed5e22c03!2sRochester%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1573345631275!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></Iframe>
                    </div>
                    <div className="search-items">
                        <Iframe src="https://www.google.com/maps/embed?" width="600" height="450" frameborder="0" style="border:0;" ></Iframe>
                    </div>
                </div>
                <div className="login-element search">
                    <Link to="/listings" className="btn btn-dark btn-lg login-element px-4">
                        Search
                    </Link>
                </div>
            </div>
        )
    }
}
export default RideSearch;