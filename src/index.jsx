import React from 'react';
import ReactDOM from 'react-dom';

// consts
const API_KEY = 'AIzaSyCs-xGMalkiyWH86FwhaLzfaeQWBwZxrrA';

// Create a new component
const App = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <p>I've started REACT learning. Again...</p>
        </div>
    )
}
// Render component
ReactDOM.render(<App/>, document.querySelector('.container'));
