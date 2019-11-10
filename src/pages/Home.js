import React from 'react'
import UpcomingTrips from './UpcomingTrips'
import { Animated } from "react-animated-css";

class Home extends React.Component {
  
  render() {
    return (
      <Animated animationIn="fadeIn">      
        <UpcomingTrips />
      </Animated>
    )
  }
}

export default Home