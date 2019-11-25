import React from 'react';

class DriverDash extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {

    const json = {
      "user1": {
        "name": "Smalltown Larry",
        "age": "22",
        "license": "999 999 999",
        "plate": "SMLT50",
        "insurance": "Geico"
      },
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
      <div className="driver_dash_component">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Driver Dashboard</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="container">
                <div className="card text-left w-75 m-3 mx-auto">
                  <h1 className="card-header"><strong></strong>{json['user1'].name}</h1>
                  <div className="card-body">
                    <div className="img" style={{ 'margin-bottom': '50px' }}>
                      <img className="card-img-top" src={require('../media/Larry.png')} alt="Card image"></img>
                    </div>
                    <div className="text_box" style={{ display: 'inline-block', 'vertical-align': 'left' }}>
                      <p className="card-text" align="top" style={{ 'margin-top': '10px' }}><strong>Age: </strong>{json['user1'].age}</p>
                      <p className="card-text" align="top"><strong>License Number: </strong>{json['user1'].license}</p>
                      <p className="card-text" align="top"><strong>Plate Number: </strong>{json['user1'].plate}</p>
                      <p className="card-text" align="top"><strong>Insurance Provider: </strong>{json['user1'].insurance}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col text-center mb-3">
                  <a href='/create' className="btn btn-dark">
                    Create New Listing
                  </a>
                </div>
              </div>
              <div className="card text-left w-75 m-3 mx-auto">
                <h3 className="card-header"><strong>Trip: </strong>{json['trip1'].tripID}</h3>
                <div className="card-body">
                  <p className="card-text"><strong>Date: </strong>{json['trip1'].date}</p>
                  <p className="card-text"><strong>Time: </strong>{json['trip1'].time}</p>
                  <p className="card-text"><strong>Departure: </strong>{json['trip1'].departure}</p>
                  <p className="card-text"><strong>Destination: </strong>{json['trip1'].destination}</p>
                  <p className="card-text"><strong>Spots Open: </strong>{json['trip1'].spotsOpen}</p>
                  <div className="row">
                    <div className="col text-center">
                      <a href="/ride-requests-1" className="btn btn-dark">
                        View Ride Requests
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card text-left w-75 m-3 mx-auto">
                <h3 className="card-header"><strong>Trip: </strong>{json['trip2'].tripID}</h3>
                <div className="card-body">
                  <p className="card-text"><strong>Date: </strong>{json['trip2'].date}</p>
                  <p className="card-text"><strong>Time: </strong>{json['trip2'].time}</p>
                  <p className="card-text"><strong>Departure: </strong>{json['trip2'].departure}</p>
                  <p className="card-text"><strong>Destination: </strong>{json['trip2'].destination}</p>
                  <p className="card-text"><strong>Spots Open: </strong>{json['trip2'].spotsOpen}</p>
                  <div className="row">
                    <div className="col text-center">
                      <a href="/ride-requests-1" className="btn btn-dark">
                        View Ride Requests
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>

        </div>


      </div>
    )
  }
}

export default DriverDash;
