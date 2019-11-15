import React from 'react'
import Larry from '../components/Larry'
import Table from '../components/Table'

const RateDriver = () => {
  return (
    <div className="container">
	  
	  <div className="trip-details-container">
        <div className="trip-details-wrapper">
          <div className="trip-details-info">
            <div className="trip-logistics mb-4" style={{'margin-top':'40px'}}>
              <Larry />
            </div>

          </div>
          <div className="card text-left" style={{'margin-top':'40px'}}>
			<div className="card-body text-left" style={{'margin-left':'200px', 'margin-right':'200px'}}>
			<p className="card-text mb-0"><strong>Vehicle: </strong>Honda Civic</p>
			<p className="card-text mb-0"><strong>Year: </strong>2014</p>
			<p className="card-text mb-0"><strong>Plate: </strong>SMLT50</p>
			<p className="card-text mb-0"><strong>License Number: </strong>999 999 999</p>
			<p className="card-text mb-0"><strong>Insurance Provider: </strong>Geico</p>
			</div>
			<div className="img" style={{'margin-left':'50px', 'margin-bottom':'76px', 'margin-right':'50px'}}>
				  <img src={require('../media/Honda1.png')} style={{'margin-right':'20px'}}/>
			
				  <img src={require('../media/Honda2.png')}/>
				  

			</div>
		  </div>
	  
        </div>       
		<a href="/admindash" className="btn btn-dark" style={{'margin-left':'450px','margin-bottom':'50px'}}>
                    Accept
        </a>
		<a href="/admindash" className="btn btn-dark" style={{'margin-left':'10px','margin-bottom':'50px'}}>
                    Decline
        </a>
      </div>
	  
    </div>
  )
}

export default RateDriver