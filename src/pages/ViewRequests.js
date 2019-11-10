import React from 'react'
import Table from '../components/Table'

export default function ViewRequests() {
  const trip = {
    "tripID": 1,
    "date": "11/12/2019",
    "time": "12:00 pm",
    "departure": "Gleason Circle",
    "destination": "Bronx, NY",
    "spotsOpen": "2/4"
  }
  return (
    <div className="view-requests-container">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Ride Requests</h1>
      </div>
      <div className="view-requests-wrapper">
        <div className="content-left">
          <div className="trip-logistics mb-4">
            <p><strong>Date: </strong>{trip['date']}</p>
            <p><strong>Time: </strong>{trip['time']}</p>
            <p><strong>Departure: </strong>{trip['departure']}</p>
            <p><strong>Destination: </strong>{trip['destination']}</p>
            <p><strong>Spots Open: </strong>{trip['spotsOpen']}</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11657.14956292153!2d-77.68796904999999!3d43.077453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1573417875229!5m2!1sen!2sus" title="map" width="600" height="450" frameborder="0" style={{'border':'0'}} allowfullscreen=""></iframe>
        </div>
        <div className="content-right">
          <Table />
        </div>
      </div>
    </div>
  )
}
