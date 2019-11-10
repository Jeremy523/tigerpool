import React from 'react'
import Boyfriend from '../media/Larry.png'

const Larry = () => {
  return (
    <div className="card" style={{'width': '18rem'}}>
      <img className="card-img-top" src={Boyfriend} />
      <div className="card-body text-center">
        <h5 className="card-title"><strong>Smalltown Larry</strong></h5>
        <h6 className="card-subtitle mb-4 text-muted">Registered Driver</h6>
        <p className="card-text mb-0"><strong>Age: </strong>22</p>
        <p className="card-text mb-0"><strong>Vehicle: </strong>Honda Civic</p>
        <p className="card-text mb-0"><strong>Year: </strong>2014</p>
        <p className="card-text mb-0"><strong>Plate: </strong>SMLT50</p>
        <p className="card-text mb-0"><strong>Rating: </strong>4/5</p>
      </div>
    </div>
  )
}

export default Larry