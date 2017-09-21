import React, { Component } from 'react';

class SearchBar extends Component{
    render() {
        // return <input type="text" onChange={ this.onInputChange }/>;
        return <input type="text" onChange={ (e) => {console.log(e.target.value);} }/>;
    }

    // onInputChange(e) {
    //     console.log(e.target.value);
    // }
}

export default SearchBar;