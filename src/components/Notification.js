import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

const Notification = (props) => {
  return (
    <Animated animationInDuration="750">
      <Link className="shadow notification-link" to={props.url}>
        <div className="notification-wrapper">
          <div>{props.text}</div>
          <div>{props.cta}</div>
        </div>
      </Link>
    </Animated>
  )
}

export default Notification