import React from 'react'
import Success from '../components/Success'

class RideSuccess extends React.Component {
  
  render() {
    return(
      <Success 
        header="Your driver has received your feedback."
        subheader="Thank you for choosing Tigerpool!"
        path="/"
        buttonText="Back to Home"
      />
    )
  }
}


export default RideSuccess;