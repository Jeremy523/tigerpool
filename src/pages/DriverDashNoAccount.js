import React from 'react';

class DriverDashNoAccount extends React.Component {
  constructor() {
    super()
  }

  render() {

    const json = {
      "user1": {
        "name": "Smalltown Larry",
        "age": "22",
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
                  <h1 className="card-header text-center"><strong></strong>{json['user1'].name}</h1>
                  <div className="card-body">
                    <div className="img">
                      <img class="card-img-top" src={require('../media/Larry.png')} alt="Card image"></img>
                    </div>
                    <div className="text_box" style={{ display: 'inline-block', 'vertical-align': 'left' }}>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col">
              <div class="row">
                <h2 style={{'padding': '100px'}} class="text-center" >Want to save money on your next road trip?</h2>
                <div class="col text-center mb-3" >
                  <a href='/create' className="btn btn-dark btn-lg">
                    Register to be a driver
                  </a>
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

export default DriverDashNoAccount;
