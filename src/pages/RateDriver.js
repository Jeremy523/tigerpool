import React from 'react'
import Larry from '../components/Larry'

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
            <span><i className="material-icons star">star_border</i></span>
            <span><i className="material-icons star">star_border</i></span>
            <span><i className="material-icons star">star_border</i></span>
            <span><i className="material-icons star">star_border</i></span>
            <span><i className="material-icons">star_border</i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RateDriver