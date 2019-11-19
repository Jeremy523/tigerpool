import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const SubmitLink = props => {
  let styles = 'App-link';

  if (!props.enabled) {
    styles = 'App-link disabled-link';
  }

  return (
    <div className="submit-link-container">
      <Link to={props.to} className={styles} {...props}>
        Submit
        </Link>
    </div>
  );
}

export default SubmitLink;