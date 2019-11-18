import React from 'react'
import { Link } from 'react-router-dom'

class Success extends React.Component {
  
  render() {
    return(
      <div className="container">
        <div className="success-component">
          <h2>Your driver has received your feedback.</h2>
          <h2>Thank you for choosing Tigerpool!</h2>
          <Link to="/" className="btn btn-dark btn-md px-4 mt-4">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }
}

export default Success;