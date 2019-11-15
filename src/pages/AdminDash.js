import React from 'react';

class AdminDash extends React.Component {
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
      "user2": {
        "name": "Bigcity Bob",        
        "age": "20",
        "license": "888 888 888",
        "plate": "NY 315",
        "insurance": "Progressive",
      }
    }
    
    return (
      <div className="admin_dash_component">
        <div className="jumbotron">
          <h1 className="display-4 text-center">Driver Applications</h1>
        </div>
        <div className="container">
          <div className="card text-left w-75 m-3 mx-auto">
            <h1 className="card-header"><strong></strong>{json['user1'].name}</h1>
            <div className="card-body">
			
			<div className = "text_box" style={{display:'inline-block','vertical-align':'left','margin-right':'300px'}}>
              <p className="card-text" align="top" style={{'margin-top':'10px'}}><strong>Age: </strong>{json['user1'].age}</p>
              <p className="card-text" align="top"><strong>License Number: </strong>{json['user1'].license}</p>
              <p className="card-text" align="top"><strong>Plate Number: </strong>{json['user1'].plate}</p>
              <p className="card-text" align="top"><strong>Insurance Provider: </strong>{json['user1'].insurance}</p>
			</div>
			
			<div className="img" style={{display:'inline-block','vertical-align':'right','margin-bottom':'50px'}}>
				  <img src={require('../media/Larry.png')}/>
			</div>
			  
              <div class="row">
                <div class="col text-center">
                  <a href="/larry-app" className="btn btn-dark">
                    View User Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card text-left w-75 m-3 mx-auto">
            <h1 className="card-header"><strong></strong>{json['user2'].name}</h1>
            <div className="card-body">
              <div className = "text_box" style={{display:'inline-block','vertical-align':'left','margin-right':'300px'}}>
              <p className="card-text" align="top" style={{'margin-top':'10px'}}><strong>Age: </strong>{json['user2'].age}</p>
              <p className="card-text" align="top"><strong>License Number: </strong>{json['user2'].license}</p>
              <p className="card-text" align="top"><strong>Plate Number: </strong>{json['user2'].plate}</p>
              <p className="card-text" align="top"><strong>Insurance Provider: </strong>{json['user2'].insurance}</p>
			</div>
			
			<div className="img" style={{display:'inline-block','vertical-align':'right','margin-bottom':'50px'}}>
				  <img src={require('../media/Bob.png')}/>
			</div>
			  
              <div class="row">
                <div class="col text-center">
                  <a href="/admindash" className="btn btn-dark">
                    View User Details
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

export default AdminDash;
