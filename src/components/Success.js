import React from 'react'
import { Link } from 'react-router-dom'
const Success = (props) => {
  return (
    <div className="container">
      <div className="success-component">
        <h2>{props.header}</h2>
        <h2>{props.subheader}</h2>
        <Link to={props.path} className="btn btn-dark btn-md px-4 mt-4">
          {props.buttonText}
        </Link>
      </div>
    </div>
  )
}
export default Success