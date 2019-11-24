import React from 'react'
import Restricted from '../components/Restricted'

class Restricted404 extends React.Component {
  render() {
    return (
      <Restricted
        header="404"
        subheader="Hmm, nothing's here..."
        links={[
          { path: "/", btnText: "Home" }
        ]}
      />
    )
  }
}

export default Restricted404;