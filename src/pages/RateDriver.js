import React from 'react'
import Larry from '../components/Larry'
import { Link } from 'react-router-dom'

const RateDriver = () => {
  return (
    <div className="rate-driver-component">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Rate Your Driver</h1>
      </div>
      <div className="container">
        <div className="rate-driver-wrapper">
          <Larry />
          <div className="rate-driver-content">
            <div className="rate-driver-stars">
              <span><i className="material-icons star">star</i></span>
              <span><i className="material-icons star">star</i></span>
              <span><i className="material-icons star">star</i></span>
              <span><i className="material-icons star">star</i></span>
              <span><i className="material-icons no-star">star</i></span>
            </div>
            <input type="textarea" />
            <Link to="/success" className="btn btn-dark btn-md">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RateDriver