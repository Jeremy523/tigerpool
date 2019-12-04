import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Tigerpool from './Tigerpool';

ReactDOM.render(<Tigerpool basename={process.env.PUBLIC_URL} />, document.getElementById('root'));

serviceWorker.unregister();
