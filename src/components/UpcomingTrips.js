import React from 'react';

class UpcomingTrips extends React.Component {
  constructor() {
    super()
    
    this.state = {
      
    }
  }
  
  
  render() {
    
    const exampleJson = {
      "trip1": {
        "tripID": 1,
        "date": "11/12/2019",
        "time": "12:00 pm",
        "departure": "Gleason Circle",
        "destination": "Bronx, NY",
        "spotsOpen": "2/4"
      },
      "trip2": {
        "tripID": 2,        
        "date": "11/21/2019",
        "time": "6:00 pm",
        "departure": "NRH",
        "destination": "Syracuse, NY",
        "spotsOpen": "1/4"
      }
    }
    
    return (
      <div className="upcoming_trips_component">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Upcoming Trips</h1>
        </div>
        <div className="container">
          <div class="row">
            <div class="col text-center mb-3">
              <a href='/listings' className="btn btn-dark">
                Find New Ride
              </a>
            </div>
          </div>
          
          <div class="row">
            <div class="col text-center mb-3">
              <a href='/create' className="btn btn-dark">
                Create New Listing
              </a>
            </div>
          </div>

          <div className="card text-left w-75 m-3 mx-auto">
            <h1 className="card-header"><strong>Trip: </strong>{exampleJson['trip1'].tripID}</h1>
            <div className="card-body">
              <p className="card-text"><strong>Date: </strong>{exampleJson['trip1'].date}</p>
              <p className="card-text"><strong>Time: </strong>{exampleJson['trip1'].time}</p>
              <p className="card-text"><strong>Departure: </strong>{exampleJson['trip1'].departure}</p>
              <p className="card-text"><strong>Destination: </strong>{exampleJson['trip1'].destination}</p>
              <p className="card-text"><strong>Spots Open: </strong>{exampleJson['trip1'].spotsOpen}</p>
              <div class="row">
                <div class="col text-center">
                  <a href="/trip" className="btn btn-dark">
                    View Trip Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card text-left w-75 m-3 mx-auto">
            <h1 className="card-header"><strong>Trip: </strong>{exampleJson['trip2'].tripID}</h1>
            <div className="card-body">
              <p className="card-text"><strong>Date: </strong>{exampleJson['trip2'].date}</p>
              <p className="card-text"><strong>Time: </strong>{exampleJson['trip2'].time}</p>
              <p className="card-text"><strong>Departure: </strong>{exampleJson['trip2'].departure}</p>
              <p className="card-text"><strong>Destination: </strong>{exampleJson['trip2'].destination}</p>
              <p className="card-text"><strong>Spots Open: </strong>{exampleJson['trip2'].spotsOpen}</p>
              <div class="row">
                <div class="col text-center">
                  <a href="/trip" className="btn btn-dark">
                    View Trip Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpcomingTrips;
