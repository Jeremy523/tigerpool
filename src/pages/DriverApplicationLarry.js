import React from 'react'
import Larry from '../components/Larry'
import Table from '../components/Table'

const DriverApplicationLarry = () => {
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
                <h5 class="modal-title" id="modalLongTitle">Action Confirmation</h5>
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

export default DriverApplicationLarry