import React from 'react'
import Success from '../components/Success'

class DriverConfirmSuccess extends React.Component {
  render() {
    return (
      <Success
        header="The user has received your confirmation."
        path="/admindash"
        buttonText="Back to Dashboard"
      />
    )
  }
}

export default DriverConfirmSuccess;