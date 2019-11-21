import React from 'react'
import Bob from '../components/Bob'
import Table from '../components/Table'

const DriverApplicationBob = () => {
  return (
    <div className="container">
	  
	  <div className="trip-details-container">
        <div className="trip-details-wrapper">
          <div className="trip-details-info">
            <div className="trip-logistics mb-4" style={{'margin-top':'40px'}}>
              <Bob />
            </div>

          </div>
          <div className="card text-left" style={{'margin-top':'40px'}}>
			<div className="card-body text-left" style={{'margin-left':'200px', 'margin-right':'200px'}}>
			<p className="card-text mb-0"><strong>Vehicle: </strong>Ford Taurus</p>
			<p className="card-text mb-0"><strong>Year: </strong>2016</p>
			<p className="card-text mb-0"><strong>Plate: </strong>NY 315</p>
			<p className="card-text mb-0"><strong>License Number: </strong>888 888 888</p>
			<p className="card-text mb-0"><strong>Insurance Provider: </strong>Progressive</p>
			</div>
			<div className="img" style={{'margin-left':'50px', 'margin-bottom':'76px', 'margin-right':'50px'}}>
				  <img src={require('../media/Ford1.jpg')} style={{'margin-right':'20px'}}/>
			
				  <img src={require('../media/Ford2.jpg')}/>
				  

			</div>
		  </div>
	  
        </div>       
		<a href="/driver-confirm-success" className="btn btn-dark" style={{'margin-left':'450px','margin-bottom':'50px'}}>
                    Accept
        </a>
		<a href="/driver-confirm-success" className="btn btn-dark" style={{'margin-left':'10px','margin-bottom':'50px'}}>
                    Decline
        </a>
      </div>
	  
    </div>
  )
}

export default DriverApplicationBob