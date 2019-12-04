import React from 'react'
import Restricted from '../components/Restricted'

class RestrictedGoHome extends React.Component {
  render() {
    return (
      <Restricted
        header="Restricted"
        subheader="You don't have proper permissions to view this page."
        links={[
          { path: "/", btnText: "Go back to home" },
          { path: "/login", btnText: "Go back to login" }
        ]}
      />
    )
  }
}

export default RestrictedGoHome;