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
        <button type="button" className="btn btn-dark" data-toggle="modal" data-target=".myModal" style={{'margin-left':'450px','margin-bottom':'50px'}}>
          Accept
        </button>
        <button type="button" className="btn btn-dark" data-toggle="modal" data-target=".myModal" style={{'margin-left':'10px','margin-bottom':'50px'}}>
          Decline
        </button>
        
        <div class="modal fade myModal" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modalLongTitle">Action Confirmation for Driver Application</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure you want to do this?
              </div>
              <div class="modal-footer">
                <a href="/driver-confirm-success" type="button" class="btn btn-dark px-4">Confirm</a>
                <a href="/driver-confirm-success" type="button" class="btn btn-secondary" data-dismiss="modal">Close</a>
              </div>
            </div>
          </div>
        </div>
      </div>
	  
    </div>
  )
}

export default DriverApplicationBob