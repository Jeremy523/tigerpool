import React from 'react';
import { Link } from 'react-router-dom';

const SubmitLink = props => {

    let styles = 'App-link';

    if (!props.enabled) {
        styles = 'App-link disabled-link';
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