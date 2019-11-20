import React from 'react'
import Bobby from '../media/Bob.png'

const Bob = () => {
  return (
    <div className="card" style={{'width': '18rem', 'margin': '2rem'}}>
      <img className="card-img-top" src={Bobby} />
      <div className="card-body text-center">
        <h5 className="card-title"><strong>Big City Bob</strong></h5>
        <p className="card-text mb-0"><strong>Age: </strong>21</p>
        <p className="card-text mb-0"><strong>Rating: </strong>5/5</p>
      </div>
    </div>
  )
}

export default Bob