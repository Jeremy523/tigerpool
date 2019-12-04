import React from 'react'
import { Link } from 'react-router-dom'

const Restricted = props => {
  return (
    <div className="container">
      <div className="success-component">
        <h2 className="restricted-header">{props.header}</h2>
        <h2>{props.subheader}</h2>
        {props.links.map(link => (
          <Link to={link.path} className="btn btn-dark btn-md px-4 mt-4">
            {link.btnText}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Restricted