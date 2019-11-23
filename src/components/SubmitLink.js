import React from 'react';
import { Link } from 'react-router-dom';

const SubmitLink = props => {

    let styles = 'btn btn-dark btn-md px-4 mt-4';

    if (!props.enabled) {
        styles = 'btn btn-light btn-md px-4 mt-4 disabled-link';
    }

    return (
        <div className="submit-link-container">
            <Link to={props.to} className={styles} {...props}>
                {props.label}
            </Link>
        </div>
    );
}

export default SubmitLink;