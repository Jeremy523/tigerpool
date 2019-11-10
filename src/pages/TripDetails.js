import React from 'react'
import TripTable from '../components/Table'

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
    
    const riders = {
      "1": {
        "name": "Bob Ross",
        "username": "bxr1234",
        "averageRating": "5/5",
        "bags": "1",
        "destination": "Syracuse, NY",
        "accepted": "Yes"
      },
      "2": {
        "name": "Rick Ross",
        "username": "rxr1234",
        "averageRating": "4/5",
        "bags": "1",
        "destination": "Binghamton, NY",
        "accepted": "Yes"
      },
      "3": {
        "name": "Jeff Ross",
        "username": "jxr1234",
        "averageRating": "4.5/5",
        "bags": "2",
        "destination": "Bronx, NY",
        "accepted": "No"
      },
      "4": {
        "name": "Diana Ross",
        "username": "dxr1234",
        "averageRating": "4.75/5",
        "bags": "1",
        "destination": "Staten Island, NY",
        "accepted": "Yes"
      },
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
          <TripTable />
          {/* <table class="table table-responsive table-hover">
            <thead className="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Average Rating</th>
                <th scope="col">Bags</th>
                <th scope="col">Destination</th>
                <th scope="col">Accepted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{riders[1].name}</th>
                <td>{riders[1].username}</td>
                <td>{riders[1].averageRating}</td>
                <td>{riders[1].bags}</td>
                <td>{riders[1].destination}</td>
                <td>{riders[1].accepted}</td>
              </tr>
              <tr>
                <th scope="row">{riders[2].name}</th>
                <td>{riders[2].username}</td>
                <td>{riders[2].averageRating}</td>
                <td>{riders[2].bags}</td>
                <td>{riders[2].destination}</td>
                <td>{riders[2].accepted}</td>
              </tr>
              <tr>
                <th scope="row">{riders[3].name}</th>
                <td>{riders[3].username}</td>
                <td>{riders[3].averageRating}</td>
                <td>{riders[3].bags}</td>
                <td>{riders[3].destination}</td>
                <td>{riders[3].accepted}</td>
              </tr>
              <tr>
                <th scope="row">{riders[4].name}</th>
                <td>{riders[4].username}</td>
                <td>{riders[4].averageRating}</td>
                <td>{riders[4].bags}</td>
                <td>{riders[4].destination}</td>
                <td>{riders[4].accepted}</td>
              </tr>
            </tbody>
          </table> */}
        </div>        
      </div>
    )
  }
}

export default TripDetails;