import React from 'react'
import { Link } from 'react-router-dom'
import { Animated } from 'react-animated-css'

const Notification = (props) => {
  
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  if (hours > 12) {
    hours = hours - 12;
  }
  
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  
  const time = hours + ':' + minutes
  
  return (
    <Animated animationInDuration="750">
      <Link className="shadow notification-link" to={ props.url }>
        <div className="arrow-up" />
        <div className="notification-wrapper">
          <div className="notification-time">{ time }</div>
          <div className="notification-text">
            <div>{props.text}</div>
            <div><strong>{props.cta}</strong></div>
          </div>
        </div>
      </Link>
    </Animated>
  )
}

export default Notification