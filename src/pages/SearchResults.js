import React from 'react'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

class SearchResults extends React.Component {

    state = {
        startDate: "1-1-1111",
        startTime: "12:00",
        startLocation: "Rochester Institute of Technology",
        endLocation: "Destination"
    };

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
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-4">
                        Search Results
                    </h1>
                </div>
                <div className="container">
                    <div>
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
                                            Apply To Trip
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
                                            Apply To Trip
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default SearchResults;