import React from 'react'
import Larry from '../components/Larry'
import { Link } from 'react-router-dom'

const RateDriver = () => {
  return (
    <div className="rate-driver-component">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Rate Your Driver</h1>
      </div>
      <div className="container">
        <div className="rate-driver-wrapper">
          <Larry />
          <div className="rate-driver-content">
            <div className="rate-driver-stars">
              <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" />
                <label class="full" for="star5"></label>

                <input type="radio" id="star4half" name="rating" value="4 and a half" />
                <label class="half" for="star4half"></label>

                <input type="radio" id="star4" name="rating" value="4" />
                <label class="full" for="star4" ></label>

                <input type="radio" id="star3half" name="rating" value="3 and a half" />
                <label class="half" for="star3half"></label>

                <input type="radio" id="star3" name="rating" value="3" />
                <label class="full" for="star3" title="Meh - 3 stars"></label>

                <input type="radio" id="star2half" name="rating" value="2 and a half" />
                <label class="half" for="star2half"></label>

                <input type="radio" id="star2" name="rating" value="2" />
                <label class="full" for="star2"></label>

                <input type="radio" id="star1half" name="rating" value="1 and a half" />
                <label class="half" for="star1half"></label>

                <input type="radio" id="star1" name="rating" value="1" />
                <label class="full" for="star1"></label>

                <input type="radio" id="starhalf" name="rating" value="half" />
                <label class="half" for="starhalf"></label>
              </fieldset>
            </div>
            <textarea className="form-control" rows="10" placeholder="Please leave a comment..." />
            <Link to="/ridesuccess" className="btn btn-dark btn-md px-4">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RateDriver