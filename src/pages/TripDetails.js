import React from 'react'
import Table from '../components/Table'

class TripDetails extends React.Component {
  
  render() {
    
    const trip = {
      "tripID": 1,
      "date": "11/12/2019",
      "time": "12:00 pm",
      "departure": "Gleason Circle",
      "destination": "Bronx, NY",
      "spotsOpen": "2/4"
    }
    
    return(
      <div className="trip-details-container">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Trip Details</h1>
        </div>
        <div className="trip-details-wrapper">
          <div className="trip-details-info">
            <div className="trip-logistics mb-4">
              <p><strong>Date: </strong>{trip['date']}</p>
              <p><strong>Time: </strong>{trip['time']}</p>
              <p><strong>Departure: </strong>{trip['departure']}</p>
              <p><strong>Destination: </strong>{trip['destination']}</p>
              <p><strong>Spots Open: </strong>{trip['spotsOpen']}</p>
            </div>
            <div className="trip-rules mb-4">
              <p><strong>Rules for This Trip:</strong></p>              
              <p><strong>1. </strong>Don't do this.</p>              
              <p><strong>2. </strong>Don't do that</p>              
              <p><strong>3. </strong>STOP!</p>              
            </div>
            <div className="trip-cost mb-4">
              <p><strong>Estimated Time: </strong>5 hours</p>            
              <p><strong>Gas: </strong>$10</p>            
              <p><strong>Tolls: </strong>$20</p>            
              <p><strong>Total Cost: </strong>$30</p>            
            </div>
          </div>
          <Table />
        </div>        
      </div>
    )
  }
}

export default TripDetails;