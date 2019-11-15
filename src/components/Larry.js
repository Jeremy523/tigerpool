import React from 'react'
import Boyfriend from '../media/Larry.png'

const Larry = () => {
  return (
    <div className="card" style={{'width': '18rem'}}>
      <img className="card-img-top" src={Boyfriend} />
      <div className="card-body text-center">
        <h5 className="card-title"><strong>Smalltown Larry</strong></h5>
        <p className="card-text mb-0"><strong>Age: </strong>22</p>
        <p className="card-text mb-0"><strong>Rating: </strong>4/5</p>
      </div>
    </div>
  )
}

export default Larry