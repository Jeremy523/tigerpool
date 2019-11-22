import React from 'react'
import Success from '../components/Success'

class RegisterSuccess extends React.Component {
  render() {
    return (
      <Success
        header="Your application has been submitted successfully."
        subheader="Keep an eye on your notifications!"
        path="/"
        buttonText="Back to Home"
      />
    )
  }
}

export default RegisterSuccess;